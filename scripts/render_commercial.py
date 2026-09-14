import subprocess
import os

images = [
    ("/src/assets/images/commercial_scene1_1789396802140.jpg", "Overwhelmed by endless racks and mismatched styles?"),
    ("/src/assets/images/commercial_scene2_1789396827763.jpg", "Fitting room disappointment with unflattering cuts?"),
    ("/src/assets/images/commercial_scene3_1789396846279.jpg", "Meet StyleCue — The In-Store AI Personal Stylist"),
    ("/src/assets/images/commercial_scene4_1789396863015.jpg", "Instant biometric scan & real-time stock curation"),
    ("/src/assets/images/commercial_scene5_1789396886958.jpg", "Flawless fit, radiant confidence, perfect style"),
    ("/src/assets/images/commercial_scene6_1789396907082.jpg", "StyleCue — Shop Smarter. Look Extraordinary.")
]

os.makedirs("public", exist_ok=True)
os.makedirs("/tmp/clips", exist_ok=True)

clip_files = []
for idx, (img_path, caption) in enumerate(images):
    # Normalize path
    full_img_path = "." + img_path if img_path.startswith("/") else img_path
    clip_path = f"/tmp/clips/clip_{idx}.mp4"
    clip_files.append(clip_path)
    
    # Slight zoom in or zoom out depending on index for cinematic variety
    if idx % 2 == 0:
        zp = "zoompan=z='min(zoom+0.0015,1.2)':d=75:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25"
    else:
        zp = "zoompan=z='if(lte(zoom,1.0),1.18,max(1.001,zoom-0.0015))':d=75:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25"
    
    # Subtitle overlay with clean dark pill box
    escaped_cap = caption.replace("'", "").replace(":", "-")
    draw = f"drawtext=text='{escaped_cap}':fontcolor=white:fontsize=32:box=1:boxcolor=black@0.65:boxborderw=14:x=(w-text_w)/2:y=h-70"
    
    cmd = [
        "ffmpeg", "-y", "-loop", "1", "-i", full_img_path,
        "-vf", f"{zp},{draw}",
        "-t", "3", "-r", "25",
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "ultrafast",
        clip_path
    ]
    print(f"Rendering clip {idx}...")
    subprocess.run(cmd, check=True)

# Generate concat file
concat_txt = "/tmp/clips/concat.txt"
with open(concat_txt, "w") as f:
    for clip in clip_files:
        f.write(f"file '{clip}'\n")

# Generate pleasant rhythmic lo-fi boutique synth background audio
audio_cmd = [
    "ffmpeg", "-y",
    "-f", "lavfi", "-i",
    "aevalsrc=sin(2*PI*220*t)*0.08*cos(2*PI*2*t) + sin(2*PI*330*t)*0.05*cos(2*PI*4*t) + sin(2*PI*440*t)*0.03*sin(2*PI*1*t):s=44100:d=18",
    "-af", "lowpass=f=800,volume=1.5,afade=t=in:ss=0:d=1,afade=t=out:st=16.5:d=1.5",
    "/tmp/clips/ambient.aac"
]
print("Generating ambient soundtrack...")
subprocess.run(audio_cmd, check=True)

# Merge video clips with audio
output_mp4 = "public/Stylecue_video.mp4"
merge_cmd = [
    "ffmpeg", "-y",
    "-f", "concat", "-safe", "0", "-i", concat_txt,
    "-i", "/tmp/clips/ambient.aac",
    "-c:v", "copy",
    "-c:a", "aac", "-b:a", "128k",
    "-shortest",
    output_mp4
]
print(f"Merging into {output_mp4}...")
subprocess.run(merge_cmd, check=True)
print("Done! Video rendered successfully.")

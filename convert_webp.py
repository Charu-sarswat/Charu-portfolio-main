import os
from PIL import Image

public_dir = os.path.join(os.path.dirname(__file__), 'public')
png_files = [f for f in os.listdir(public_dir) if f.endswith('.png')]

for f in png_files:
    png_path = os.path.join(public_dir, f)
    webp_name = os.path.splitext(f)[0] + '.webp'
    webp_path = os.path.join(public_dir, webp_name)
    
    with Image.open(png_path) as img:
        img.save(webp_path, 'WEBP', quality=80)
        orig_size = os.path.getsize(png_path)
        new_size = os.path.getsize(webp_path)
        print(f"Converted {f} ({orig_size / 1024 / 1024:.2f} MB) -> {webp_name} ({new_size / 1024:.1f} KB)")
    
    # Remove original heavy png file
    os.remove(png_path)
    print(f"Removed {f}")

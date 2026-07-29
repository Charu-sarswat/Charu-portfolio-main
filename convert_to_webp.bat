@echo off
echo Converting PNG images to WebP...
python convert_webp.py
echo.
echo Staging updated webp files and removing old png files...
git add public/*.webp
git rm public/*.png --ignore-unmatch
git add .
git commit -m "convert images to webp and reduce repository payload size"
echo.
echo Pushing to GitHub...
git push -u origin main
echo Done!

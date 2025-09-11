from PIL import Image

img = Image.open("profile-img.png")
img.save("profile-img.webp", "WEBP")

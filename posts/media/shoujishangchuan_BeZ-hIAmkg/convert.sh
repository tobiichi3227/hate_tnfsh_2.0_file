# print `grep *.jpg`

# ls *.jpg | while read
ls *.png | while read filename;
do
    # echo "filename: $filename"
    cwebp $filename -o "{$filename}.webp"
    rm $filename
    mv "{$filename}.webp" $filename
done

# lightshoot-parser-cli

lightshot-parser-cli is a cli for parsing images from a site https://prnt.sc

--- 
### Using

The parser has 4 options

- -s number of images to parse
- -f path to the folder where the images will be uploaded
- -d delay for each request (default 1000 ms) it is better not to do less than a second
- -t (optional) the image search will start from this string 

```
> l-parser -s 10 -f ./img -d 2000 -t aq1   
```
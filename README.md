# png253c

Converts image (not only PNG but any supported by [jimp](https://www.npmjs.com/package/jimp)) 
to ZX Spectrum 53c format. 

In this mode bitmap data filled with checker board pattern and the image is set only by attributes data.
The result is an image with a resolution of 32x24, and the palette consists of 53 colors. Like this:

Before:

![](octocat_before.png)

After:

![](octocat_after.png)

### Usage

#### Without installation
```
npm start -- [options] input.png
```

#### With installation
```
sudo npm install -g png253c
png253c [options] input.png
```

### Options

|Short | Long                  | description                 | Default |
|------|-----------------------|-----------------------------|---------|
|	-o | --output              |output TAP file              |out.tap  |
|	-h | --help                |print usage information      |false    |
|	-v | --version             |print version information    |false    |

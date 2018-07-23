#ifndef TEX_H
#define TEX_H


#include <iostream>

using namespace std;

const int  BITMAP_ID=0x4D42;
void* imageData;	



unsigned char *bitmapData=0;
	

GLuint texture;



BITMAPINFOHEADER bih;




unsigned char * LoadBitmapFile(char *filename, BITMAPINFOHEADER *bitmapInfoHeader)
{
	FILE *filePtr;
	BITMAPFILEHEADER bitmapFileHeader;
	unsigned char *bitmapImage;
	int imageIdx =0;
	unsigned char tempRGB;

	filePtr = fopen(filename, "rb");
	if (filePtr == NULL) return NULL;
		
	fread(&bitmapFileHeader, sizeof(BITMAPFILEHEADER),1,filePtr);

	if (bitmapFileHeader.bfType !=BITMAP_ID)
	{
		fclose(filePtr);
		return NULL;
	}

	fread(bitmapInfoHeader, sizeof(BITMAPINFOHEADER),1, filePtr);

	fseek(filePtr,bitmapFileHeader.bfOffBits, SEEK_SET);

	bitmapImage = (unsigned char *)malloc(bitmapInfoHeader->biSizeImage);

	if (!bitmapImage)
	{
		free(bitmapImage);
		fclose(filePtr);
		return NULL;
	}

	fread(bitmapImage,1,bitmapInfoHeader->biSizeImage,filePtr);

	if (bitmapImage == NULL)
	{
		fclose(filePtr);
		return NULL;
	}

	for (imageIdx =0; imageIdx < bitmapInfoHeader->biSizeImage; imageIdx+=3)
	{
		tempRGB = bitmapImage[imageIdx];
		bitmapImage[imageIdx]=bitmapImage[imageIdx+2];
		bitmapImage[imageIdx+2]=tempRGB;
	}

	fclose(filePtr);
	return bitmapImage;
}


int WriteBitmapFile(char *filename, int width, int height, unsigned char *imageData)
{
	FILE			 *filePtr;			// wskaŸnik pliku
	BITMAPFILEHEADER bitmapFileHeader;	// nag³ówek pliku
	BITMAPINFOHEADER bitmapInfoHeader;	// nag³ówek obrazu
	int				 imageIdx;			// indeks obrazu
	unsigned char	 tempRGB;			// zmienna zamiany sk³adowych

	// otwiera plik do zapisu w trybie "writing binary"
	filePtr = fopen(filename, "wb");
	if (!filePtr)
		return 0;

	// definiuje nag³ówek pliku
	bitmapFileHeader.bfSize = sizeof(BITMAPFILEHEADER);
	bitmapFileHeader.bfType = 0x4D42;
	bitmapFileHeader.bfReserved1 = 0;
	bitmapFileHeader.bfReserved2 = 0;
	bitmapFileHeader.bfOffBits = sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER);
	
	// definiuje nag³ówek mapy bitowej
	bitmapInfoHeader.biSize = sizeof(BITMAPINFOHEADER);
	bitmapInfoHeader.biPlanes = 1;
	bitmapInfoHeader.biBitCount = 24;						// 24-bitowy
	bitmapInfoHeader.biCompression = BI_RGB;				// bez kompresji
	bitmapInfoHeader.biSizeImage = width * abs(height) * 3;	// width * height * (bajty RGB)
	bitmapInfoHeader.biXPelsPerMeter = 0;
	bitmapInfoHeader.biYPelsPerMeter = 0;
	bitmapInfoHeader.biClrUsed = 0;
	bitmapInfoHeader.biClrImportant = 0;
	bitmapInfoHeader.biWidth = width;						// szerokoœæ mapy
	bitmapInfoHeader.biHeight = height;						// wysokoœæ mapy

	// zamienia format danych z RGB na BGR
	for (imageIdx = 0; imageIdx < bitmapInfoHeader.biSizeImage; imageIdx+=3)
	{
		tempRGB = imageData[imageIdx];
		imageData[imageIdx] = imageData[imageIdx + 2];
		imageData[imageIdx + 2] = tempRGB;
	}

	// zapisuje nag³ówek pliku
	fwrite(&bitmapFileHeader, 1, sizeof(BITMAPFILEHEADER), filePtr);

	// zapisuje nag³ówek mapy bitowej
	fwrite(&bitmapInfoHeader, 1, sizeof(BITMAPINFOHEADER), filePtr);

	// zapisuje dane mapy bitowej
	fwrite(imageData, 1, bitmapInfoHeader.biSizeImage, filePtr);

	// zamyka plik
	fclose(filePtr);

	return 1;
}



 void setTexture(char *filename, GLenum f )
{
  unsigned int texture;	
  unsigned char *bitmapData;
  BITMAPINFOHEADER bitmapInfoHeader;

  
  bitmapData = LoadBitmapFile(filename,&bitmapInfoHeader);
  if (bitmapData!=0) glGenTextures(1,&texture); 
  //glEnable(GL_TEXTURE_2D);
  glBindTexture(GL_TEXTURE_2D,texture);	
  glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR);
  glTexEnvi(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,f);
  glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, bitmapInfoHeader.biWidth,bitmapInfoHeader.biHeight, 0, GL_RGB, GL_UNSIGNED_BYTE, bitmapData);
  		
}

#endif
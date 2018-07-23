#include <windows.h>

#include "freeglut.h"

void wyswietlanie(void)
{
	// czyszczenie bufor�w koloru
	glClear(GL_COLOR_BUFFER_BIT);
	// tworzenie paska czworok�t�w pokrytego tekstur�;
	// ka�dy czworok�t pokrywany jest tekstur� o rozmiarze
	// 4x2, czyli tekstura jest powtarzana cztery razy 
	// wzd�u� osi X i dwa razy wzd�u� osi Y
	glBegin(GL_QUAD_STRIP);
		// pierwszy czworok�t
		glTexCoord2i(0,0);
		glVertex3i(-600,-300,-600);
		glTexCoord2i(0,2);
		glVertex3i(-600, 300,-600);
		glTexCoord2i(4,0);
		glVertex3i( 600,-300,-600);
		glTexCoord2i(4,2);
		glVertex3i( 600, 300,-600);
		// drugi czworok�t
		glTexCoord2i(0,0);
		glVertex3i( 600,-300, 600);
		glTexCoord2i(0,2);
		glVertex3i( 600, 300, 600);
		// trzeci czworok�t
		glTexCoord2i(4,0);
		glVertex3i(-600,-300, 600);
		glTexCoord2i(4,2);
		glVertex3i(-600, 300, 600);
		// czwarty czworok�t
		glTexCoord2i(0,0);
		glVertex3i(-600,-300,-600);
		glTexCoord2i(0,2);
		glVertex3i(-600, 300,-600);
	glEnd();
	// rysowanie na podstawie zebranych danych
	glFlush();
}

void skalowanie(int s, int w)
{	
	// zestaw funkcji ustalaj�cych spos�b rzutowania,
	// zakresy wsp�rz�dnych x,y widocznych w oknie 
	// oraz zeruj�cych macierze przekszta�ce�
	glViewport(0,0,s,w);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	if (s<=w) glOrtho(-1000,1000,-1000*(w/s),1000*(w/s),-1000,1000);
	else glOrtho(-1000*(s/w),1000*(s/w),-1000,1000,-1000,1000);

	glMatrixMode(GL_MODELVIEW); 
	glLoadIdentity(); 

	// obr�cenie sceny o 40 stopni w osi X i Y
	glRotated(40,1.0f,1.0f,0.0f);
}

void tekstura(void)
{
	// tablica z danymi dla tekstury o wymiarach 8x8 punkt�w; 
	// obraz sk�ada si� z czterech kwadrat�w, kt�rych 
	// kolory podawane s� jako sk�adowe RGB, czyli:
	// - czerwony:  {250,  0,250} 
	// - bia�y:     {230,230,230}
	// - zielony:   {  0,250,  0}
	// - niebieski: {  0,  0,250}
	GLubyte tekstura[8][8][3]=
	{
		{
		{250,  0,  0},{250,  0,  0},{250,  0,  0},{250,  0,  0},
		{230,230,230},{230,230,230},{230,230,230},{230,230,230}
		},
		{
		{250,  0,  0},{250,  0,  0},{250,  0,  0},{250,  0,  0},
		{230,230,230},{230,230,230},{230,230,230},{230,230,230}
		},
		{
		{250,  0,  0},{250,  0,  0},{250,  0,  0},{250,  0,  0},
		{230,230,230},{230,230,230},{230,230,230},{230,230,230}
		},
		{
		{250,  0,  0},{250,  0,  0},{250,  0,  0},{250,  0,  0},
		{230,230,230},{230,230,230},{230,230,230},{230,230,230}
		},
		{
		{  0,250,  0},{  0,250,  0},{  0,250,  0},{  0,250,  0},
		{  0,  0,250},{  0,  0,250},{  0,  0,250},{  0,  0,250}
		},
		{
		{  0,250,  0},{  0,250,  0},{  0,250,  0},{  0,250,  0},
		{  0,  0,250},{  0,  0,250},{  0,  0,250},{  0,  0,250}
		},
		{
		{  0,250,  0},{  0,250,  0},{  0,250,  0},{  0,250,  0},
		{  0,  0,250},{  0,  0,250},{  0,  0,250},{  0,  0,250}
		},
		{
		{  0,250,  0},{  0,250,  0},{  0,250,  0},{  0,250,  0},
		{  0,  0,250},{  0,  0,250},{  0,  0,250},{  0,  0,250}
		}
	};

	// definicja tekstury
	glTexImage2D(GL_TEXTURE_2D,0,3,8,8,0,GL_RGB,GL_UNSIGNED_BYTE,tekstura);
	// ustalenie parametr�w tekstury
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_NEAREST);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_REPEAT);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_REPEAT);
	// ustalenie trybu teksturowania
	glTexEnvi(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_DECAL);	
	// w��czenie teksturowania
	glDisable(GL_TEXTURE_1D);
	glEnable(GL_TEXTURE_2D);
}

void main(int argil, char *argtab[])
{
	// inicjalizacja biblioteki GLUT
	glutInit(&argil,argtab);
	// kolory podawane jako sk�adowe RGB,
	glutInitDisplayMode(GLUT_RGBA);
	// rozmiar okna 600x600 punkt�w
	glutInitWindowSize(600,600);
	// pocz�tkowe po�o�enie okna
	glutInitWindowPosition(100,100);
	// otwarcie okna
	glutCreateWindow("Nak�adanie tekstur");

	// ustawienie warto�ci jakimi b�d� wype�niane
	// bufory kolor�w w trakcie czyszczenia
	glClearColor(0,0,0,0);
	// funkcja definiuj�ca tekstur�
	tekstura();

	// rejestracja obs�ugi zdarze�
	glutDisplayFunc(wyswietlanie);
	glutReshapeFunc(skalowanie);

	// rozpocz�cie przetwarzania p�tli obs�ugi zdarze�
	glutMainLoop();
}



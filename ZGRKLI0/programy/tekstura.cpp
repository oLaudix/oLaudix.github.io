#include <windows.h>

#include "freeglut.h"

void wyswietlanie(void)
{
	// czyszczenie buforów koloru
	glClear(GL_COLOR_BUFFER_BIT);
	// tworzenie paska czworok¹tów pokrytego tekstur¹;
	// ka¿dy czworok¹t pokrywany jest tekstur¹ o rozmiarze
	// 4x2, czyli tekstura jest powtarzana cztery razy 
	// wzd³u¿ osi X i dwa razy wzd³u¿ osi Y
	glBegin(GL_QUAD_STRIP);
		// pierwszy czworok¹t
		glTexCoord2i(0,0);
		glVertex3i(-600,-300,-600);
		glTexCoord2i(0,2);
		glVertex3i(-600, 300,-600);
		glTexCoord2i(4,0);
		glVertex3i( 600,-300,-600);
		glTexCoord2i(4,2);
		glVertex3i( 600, 300,-600);
		// drugi czworok¹t
		glTexCoord2i(0,0);
		glVertex3i( 600,-300, 600);
		glTexCoord2i(0,2);
		glVertex3i( 600, 300, 600);
		// trzeci czworok¹t
		glTexCoord2i(4,0);
		glVertex3i(-600,-300, 600);
		glTexCoord2i(4,2);
		glVertex3i(-600, 300, 600);
		// czwarty czworok¹t
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
	// zestaw funkcji ustalaj¹cych sposób rzutowania,
	// zakresy wspó³rzêdnych x,y widocznych w oknie 
	// oraz zeruj¹cych macierze przekszta³ceñ
	glViewport(0,0,s,w);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	if (s<=w) glOrtho(-1000,1000,-1000*(w/s),1000*(w/s),-1000,1000);
	else glOrtho(-1000*(s/w),1000*(s/w),-1000,1000,-1000,1000);

	glMatrixMode(GL_MODELVIEW); 
	glLoadIdentity(); 

	// obrócenie sceny o 40 stopni w osi X i Y
	glRotated(40,1.0f,1.0f,0.0f);
}

void tekstura(void)
{
	// tablica z danymi dla tekstury o wymiarach 8x8 punktów; 
	// obraz sk³ada siê z czterech kwadratów, których 
	// kolory podawane s¹ jako sk³adowe RGB, czyli:
	// - czerwony:  {250,  0,250} 
	// - bia³y:     {230,230,230}
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
	// ustalenie parametrów tekstury
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_NEAREST);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_REPEAT);
   	glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_REPEAT);
	// ustalenie trybu teksturowania
	glTexEnvi(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_DECAL);	
	// w³¹czenie teksturowania
	glDisable(GL_TEXTURE_1D);
	glEnable(GL_TEXTURE_2D);
}

void main(int argil, char *argtab[])
{
	// inicjalizacja biblioteki GLUT
	glutInit(&argil,argtab);
	// kolory podawane jako sk³adowe RGB,
	glutInitDisplayMode(GLUT_RGBA);
	// rozmiar okna 600x600 punktów
	glutInitWindowSize(600,600);
	// pocz¹tkowe po³o¿enie okna
	glutInitWindowPosition(100,100);
	// otwarcie okna
	glutCreateWindow("Nak³adanie tekstur");

	// ustawienie wartoœci jakimi bêd¹ wype³niane
	// bufory kolorów w trakcie czyszczenia
	glClearColor(0,0,0,0);
	// funkcja definiuj¹ca teksturê
	tekstura();

	// rejestracja obs³ugi zdarzeñ
	glutDisplayFunc(wyswietlanie);
	glutReshapeFunc(skalowanie);

	// rozpoczêcie przetwarzania pêtli obs³ugi zdarzeñ
	glutMainLoop();
}



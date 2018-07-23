//program demonstruje dzia³anie funkcji glutKeyboardFunc()
//Klawisze 0,1,2,3,4,5 powoduj¹ losow¹ zmianê kolorów œcian kostki

#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 


float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 10.0;//parametry dla gluPerspective(); 
 
//tablica kolorów do wyboru
float kolory[6][3]={
					{1.0, 0.0, 0.0},
					{0.0, 1.0, 0.0},
					{0.0, 0.0, 1.0},
					{1.0, 1.0, 0.0},
					{1.0, 0.0, 1.0},
					{0.0, 1.0, 1.0}
				   };

float koloryKostki[6][3];//bie¿¹ca tablica kolorów dla kostki


void ustawKoloryKostki(float c[][3])//inicjacja tablicy kolorów dla kostki
{
	for (int i=0; i<6; i++)
		for (int j=0; j<3; j++)  koloryKostki[i][j]=c[i][j];
	srand(1);//inicjalizacja generatora liczb losowych
}




void ustawKolor(float c[])//ustawienie bie¿¹cego koloru
{
	glColor3f(c[0], c[1], c[2]);
}

void zmienKolor(float c1[],  float c2[])//zmiana kolorów
{
	for (int i=0; i<3; i++) c1[i]=c2[i];
}

void kostka()
{
  glBegin(GL_QUADS);

  //œciana: y = 0.5
  
  ustawKolor(koloryKostki[0]);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //œciana: y = -0.5
  
   ustawKolor(koloryKostki[1]);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //œciana: x = 0.5
  
   ustawKolor(koloryKostki[2]);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  
  //œciana: x = -0.5
  
   ustawKolor(koloryKostki[3]);
  glVertex3f(-0.5,  0.5,  0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //œciana: z = 0.5
  
   ustawKolor(koloryKostki[4]);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //œciana: z = -0.5
  
   ustawKolor(kolory[5]);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  
glEnd();
  
}

void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glEnable(GL_DEPTH_TEST);
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
glLoadIdentity();
gluPerspective(fovy, aspect, near_, far_);
gluLookAt(3.0, 3.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);

kostka();

glFlush();
glutSwapBuffers();
} 

void odrysuj(int szerokosc, int wysokosc){

	float  h = float(wysokosc), w = float(szerokosc);
	
	glViewport(0, 0, szerokosc, wysokosc);
	glLoadIdentity();
	gluPerspective(fovy, w/h, near_, far_);
	
}

void klawiatura(unsigned char kod_klawisza, int x, int y)
{
  switch (kod_klawisza) {

  case '0':
           zmienKolor(koloryKostki[0],kolory[rand()%6]);
           glutPostRedisplay();
		   break;
		       
  case '1':
           zmienKolor(koloryKostki[1],kolory[rand()%6]);
           glutPostRedisplay();
		   break;
	
  case '2': 
	        zmienKolor(koloryKostki[2],kolory[rand()%6]);
            glutPostRedisplay();
			break;

  case '3': 
	        zmienKolor(koloryKostki[3],kolory[rand()%6]);
            glutPostRedisplay();
			break;

  case '4': 
	        zmienKolor(koloryKostki[4],kolory[rand()%6]);
            glutPostRedisplay();
			break;

  case '5': 
	        zmienKolor(koloryKostki[5],kolory[rand()%6]);
            glutPostRedisplay();
			break;

  }
}

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
                        
  glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);
  
  glutInitWindowSize(400,300);
    
  glutInitWindowPosition(100,100);
  
  glutCreateWindow("Scena testowa");
  
  glutDisplayFunc(display);
  
  glutReshapeFunc(odrysuj);

  glutKeyboardFunc(klawiatura);
   
  ustawKoloryKostki(kolory);

  glutMainLoop();
  
}
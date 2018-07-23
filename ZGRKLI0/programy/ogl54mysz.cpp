//program demonstruje dzia³anie funkcji glutMouseFunc()
//Wciskanie przycisków myszy powoduje zmianê kolorów trzech œcian kostki,
//Zwalnianie przycisków przywraca kolory pocz¹tkowe

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

void mysz(int przycisk, int stan, int x, int y)
{
  if (stan == GLUT_DOWN) {  
    switch (przycisk) {
      case GLUT_LEFT_BUTTON:
                            zmienKolor(koloryKostki[0],kolory[1]);
                            glutPostRedisplay();
                            break;
        
      case GLUT_MIDDLE_BUTTON:
                            zmienKolor(koloryKostki[2],kolory[3]);
                            glutPostRedisplay();
                            break;
      case GLUT_RIGHT_BUTTON:
                            zmienKolor(koloryKostki[4],kolory[5]);
                            glutPostRedisplay();
                            break;
    }
  } 
  else if (stan == GLUT_UP){
    switch (przycisk) {
      case GLUT_LEFT_BUTTON:
                            zmienKolor(koloryKostki[0],kolory[0]);
                            glutPostRedisplay();
                            break;
        
      case GLUT_MIDDLE_BUTTON:
                            zmienKolor(koloryKostki[2],kolory[2]);
                            glutPostRedisplay();
                            break;
      case GLUT_RIGHT_BUTTON:
                            zmienKolor(koloryKostki[4],kolory[4]);
                            glutPostRedisplay();
                            break;
    }
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

  glutMouseFunc(mysz);
   
  ustawKoloryKostki(kolory);

  glutMainLoop();
  
}
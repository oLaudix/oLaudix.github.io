#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 

float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 10.0;//parametry dla gluPerspective(); 
 


float wierzcholki[] = {-0.5,  -0.5, 0.0,
                       0.5,  -0.5, 0.0,	
                       0.5,  0.5, 0.0,
                       -0.5,  0.5, 0.0 
                      };
                      
float kolory[] = {1.0, 0.0, 0.0,
                  0.0, 1.0, 0.0,
                  0.0, 0.0, 1.0,
                  1.0, 1.0, 0.0
                 };              


unsigned short indeksy[] = {0,1,2,3}; 


void kwadrat()
{
	glDrawElements(GL_QUADS, 4, GL_UNSIGNED_SHORT, indeksy);
}  
void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT);
gluLookAt(0.0, 0.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);

glEnableClientState(GL_VERTEX_ARRAY);
glEnableClientState(GL_COLOR_ARRAY);

glVertexPointer(3, GL_FLOAT, 0, wierzcholki);
glColorPointer(3, GL_FLOAT, 0, kolory);

kwadrat();

glFlush();
} 

void odrysuj(int szerokosc, int wysokosc){

	float  h = float(wysokosc), w = float(szerokosc);
	
	glViewport(0, 0, szerokosc, wysokosc);
	glLoadIdentity();
	gluPerspective(fovy, w/h, near_, far_);
	
}

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
                        
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
  
  glutInitWindowSize(400,300);
    
  glutInitWindowPosition(100,100);
  
  glutCreateWindow("Scena testowa");
  
  glutDisplayFunc(display);
  
  glutReshapeFunc(odrysuj);

  glutMainLoop();
  
}
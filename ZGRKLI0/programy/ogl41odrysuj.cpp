#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 

float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 10.0;//parametry dla gluPerspective(); 
                     
void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT);
glLoadIdentity();
gluPerspective(fovy, aspect, near_, far_);
gluLookAt(0.0, 0.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);
glBegin(GL_QUADS);
  glColor3f(1.0, 0.0, 0.0); 
  glVertex3f(-1.0, -1.0, 0.0);
  glColor3f(0.0, 1.0, 0.0); 
  glVertex3f(1.0, -1.0, 0.0);
  glColor3f(1.0, 0.0, 1.0); 
  glVertex3f(1.0, 1.0, 0.0);
  glColor3f(0.0, 0.0, 1.0); 
  glVertex3f(-1.0, 1.0, 0.0);
glEnd();  
glFlush();
} 

void odrysuj(int szerokosc, int wysokosc){

	float  h = float(wysokosc), w = float(szerokosc);
	int width=floor(h*aspect);
	int height=floor(w/aspect);

	if ((w/h - aspect) <= 0) glViewport(0, floor((h-height)/2), szerokosc, height); 
	else glViewport(floor((w-width)/2),0  , width, wysokosc);
	
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
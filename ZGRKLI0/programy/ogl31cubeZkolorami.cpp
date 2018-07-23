#include <windows.h> 
										 
#include "freeglut.h"

void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);//"czyszczenie" t³a okan i bufora g³êbokosci
glEnable(GL_DEPTH_TEST);//w³¹cznie algorytmu zas³aniania
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(60.0, 1.0, 0.1, 50.0); //bry³a widzenia perspektywicznego
gluLookAt(3.0,4.0, 8.0, 0.0,0.0,-5.0, 0.0,1.0,0.0);//obserwator 
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

GLfloat ambientColor[4] = {1.0, 0.0, 0.0, 1.0};
glLightModelfv(GL_LIGHT_MODEL_AMBIENT, ambientColor);

GLfloat lightColor0[4] = {1.0, 0.0, 0.0, 1.0};
GLfloat lightPosition0[4] = {6.0, 4.0, 8.0, 1.0};
glLightfv(GL_LIGHT0, GL_DIFFUSE, lightColor0);
glLightfv(GL_LIGHT0, GL_SPECULAR, lightColor0);
glLightfv(GL_LIGHT0, GL_POSITION, lightPosition0);

glEnable(GL_LIGHTING);
glEnable(GL_LIGHT0);
glEnable(GL_NORMALIZE);

//glColor3f(1.0, 0.0, 0.0);
glutSolidCube(3.0);

glFlush();
} 

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE | GLUT_DEPTH );
  glutInitWindowSize(600,600);
  glutInitWindowPosition(100,100);
  glutCreateWindow("Scena testowa");
  glutDisplayFunc(display);
  glutMainLoop();
}
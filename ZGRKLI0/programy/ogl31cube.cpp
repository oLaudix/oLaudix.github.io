#include <windows.h> 
										 
#include <GL/glut.h> 

void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);//"czyszczenie" t³a okan i bufora g³êbokosci
glEnable(GL_DEPTH_TEST);//w³¹cznie algorytmu zas³aniania
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(60.0, 1.0, 0.1, 10.0); //bry³a widzenia perspektywicznego
gluLookAt(2.0,2.0,2.0, 0.0,0.0,0.0, 0.0,1.0,0.0);//obserwator 
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

glColor3f(1.0, 0.0, 0.0);
glutWireCube(2.0);

glFlush();
} 

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE | GLUT_DEPTH );
  glutInitWindowSize(400,300);
  glutInitWindowPosition(100,100);
  glutCreateWindow("Scena testowa");
  glutDisplayFunc(display);
  glutMainLoop();
}
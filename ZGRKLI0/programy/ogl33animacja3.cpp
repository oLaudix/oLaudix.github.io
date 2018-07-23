#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h>// biblioteka matematyczna - m.in. deklaracje funkcji trygonometrycznych

const float pi=3.1415926535897;
const float delta_alfa=0.5;
float alfa=0.0;


void uklad()
{
  
  glBegin(GL_LINES);
    glColor3f(0.0, 1.0, 0.0); //zielona oœ X
    glVertex3f(-5.0, 0.0, 0.0);
    glVertex3f(5.0, 0.0, 0.0); 

    glColor3f(0.0, 0.0, 1.0); // niebieska oœ Y
	glVertex3f(0.0, -5.0, 0.0);
	glVertex3f(0.0,  5.0, 0.0);
	
	glColor3f(0.0,  0.0, 0.0); // czarna oœ Z
	glVertex3f(0.0, 0.0, -5.0);
	glVertex3f(0.0, 0.0,  5.0);
	  
  glEnd();

}

void init()
{
  glClearColor(1.0,1.0,1.0,1.0); //kolor t³a okna
  glEnable(GL_DEPTH_TEST); // w³¹czenie testu g³êbokoœci
	
  glMatrixMode(GL_PROJECTION);
  gluPerspective(60.0,1.0,0.1,20.0); 
  glMatrixMode(GL_MODELVIEW); // nic wiêcej na stosie rzutowania
                              // siê nie znajdzie   
}


void kostka()
{
  glBegin(GL_QUADS);

  //œciana: y = 0.5
  
  glColor3f(1.0, 0.0, 0.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //œciana: y = -0.5
  
  glColor3f(0.0, 1.0, 0.0);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //œciana: x = 0.5
  
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  
  //œciana: x = -0.5
  
  glColor3f(1.0, 1.0, 0.0);
  glVertex3f(-0.5,  0.5,  0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //œciana: z = 0.5
  
  glColor3f(1.0, 0.0, 1.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //œciana: z = -0.5
  
  glColor3f(0.0, 1.0, 1.0);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  
glEnd();
  
}

void scena()
{
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
  
  
   
  glLoadIdentity();// przed kolejn¹ klatk¹ animacyjn¹
                   // na stosie modelowania nie mog¹
                   // znajdowaæ siê ¿adne macierze z 
                   // poprzedniej klatki animacyjnej

  
  
  gluLookAt(10*cos(pi*alfa/180.0), 10*sin(pi*alfa/180.0), 
	  10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  //obserwator znajduje siê na wysokoœci 6.


  
  uklad();
  
  //glRotatef(alfa, 1.0, 0.0, 0.0);
  kostka();

  
    
  glFlush();
  glutSwapBuffers(); // zamiana buforów koloru 
}
 

void anim()
{
  alfa+=delta_alfa;
  glutPostRedisplay();
}

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
  glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH );
  glutInitWindowSize(400,400);
  glutInitWindowPosition(100,100);
  glutCreateWindow("Scena testowa");
  glutDisplayFunc(scena);
  glutIdleFunc(anim);//rejestracja funkcji animacyjnej
  init();
  glutMainLoop();
}
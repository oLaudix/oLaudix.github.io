#include <windows.h> 
										 
#include "freeglut.h"

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
  gluPerspective(60.0,1.0,1.0,20.0); 
  gluLookAt(7.0,7.0,5.0, 0.0,0.0,0.0, 0.0,0.0,1.0); 
  glMatrixMode(GL_MODELVIEW); // nic wiêcej na stosie rzutowania
                              // siê nie znajdzie   
}


void kwadrat()
{
  glBegin(GL_QUADS);
    glVertex3f( 0.5,  0.5, 0.0);
    glVertex3f(-0.5,  0.5, 0.0);
    glVertex3f(-0.5, -0.5, 0.0);
    glVertex3f( 0.5, -0.5, 0.0);    
  glEnd();  
  
}

void scena()
{
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

  glLoadIdentity();// przed kolejn¹ klatk¹ animacyjn¹
                   // na stosie modelowania nie mog¹
                   // znajdowaæ siê ¿adne macierze z 
                   // poprzedniej klatki animacyjnej

  uklad();
  
  glRotatef(alfa, 0.0, 0.0, 1.0);
  
  glTranslatef(5.0, 0.0, 0.0);
  
  //glRotatef(-alfa, 0.0, 0.0, 1.0);	

  glColor3f(1.0, 0.0, 0.0);
  kwadrat();
    
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
  glutIdleFunc(anim);
  init();
  glutMainLoop();
}
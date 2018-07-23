#include <windows.h> 
										 
#include "freeglut.h"



const float delta_alfa=0.5;
float alfa=0.0;


void uklad()
{
  
  glBegin(GL_LINES);
    glColor3f(0.0, 1.0, 0.0); //zielona o� X
    glVertex3f(-5.0, 0.0, 0.0);
    glVertex3f(5.0, 0.0, 0.0); 

    glColor3f(0.0, 0.0, 1.0); // niebieska o� Y
	glVertex3f(0.0, -5.0, 0.0);
	glVertex3f(0.0,  5.0, 0.0);
	
	glColor3f(0.0,  0.0, 0.0); // czarna o� Z
	glVertex3f(0.0, 0.0, -5.0);
	glVertex3f(0.0, 0.0,  5.0);
	  
  glEnd();

}

void init()
{
  glClearColor(1.0,1.0,1.0,1.0); //kolor t�a okna
  glEnable(GL_DEPTH_TEST); // w��czenie testu g��boko�ci
	
  glMatrixMode(GL_PROJECTION);
  gluPerspective(60.0,1.0,0.1,10.0); 
  gluLookAt(0.0,0.0,10.0, 0.0,0.0,0.0, 0.0,1.0,0.0); 
  glMatrixMode(GL_MODELVIEW); // nic wi�cej na stosie rzutowania
                              // si� nie znajdzie   
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
  
  
   
  glLoadIdentity();// przed kolejn� klatk� animacyjn�
                   // na stosie modelowania nie mog�
                   // znajdowa� si� �adne macierze z 
                   // poprzedniej klatki animacyjnej

  uklad();
  
  glRotatef(alfa, 0.0, 0.0, 1.0);
  
  glTranslatef(5.0, 0.0, 0.0);
  
  glRotatef(-alfa, 0.0, 0.0, 1.0);	

  glColor3f(1.0, 0.0, 0.0);
  kwadrat();
    
  glFlush();
  glutSwapBuffers(); // zamiana bufor�w koloru 
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
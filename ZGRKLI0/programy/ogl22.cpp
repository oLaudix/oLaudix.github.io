#include <windows.h> 
										 
#include "freeglut.h"


//kwadrat o œrodku (0,0,0), le¿¹cy w p³aszczyŸnie XY
//o krawêdziach d³ugoœci 1, równoleg³ych do osi X i Y

void sciana()
{
glBegin(GL_QUADS);
  glVertex3f( 0.5,  0.5,  0.0);
  glVertex3f( 0.5, -0.5,  0.0);
  glVertex3f(-0.5, -0.5,  0.0);
  glVertex3f(-0.5,  0.5,  0.0);
glEnd();
}


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


  //œciana: y = 0.5
  
  glColor3f(1.0, 0.0, 0.0);  
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi Y o 0.5
    glTranslatef(0.0, 0.5, 0.0);
    //obrót wokó³ osi X o 90 stopni
    glRotatef(90.0, 1.0, 0.0, 0.0);
    sciana();
  glPopMatrix();
  
  //œciana: y = -0.5
  glColor3f(0.0, 1.0, 0.0);  
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi Y o -0.5
    glTranslatef(0.0, -0.5, 0.0);
    //obrót wokó³ osi X o 90 stopni
    glRotatef(90.0, 1.0, 0.0, 0.0);
    sciana();
  glPopMatrix();
  
  //œciana: x = 0.5
  
  glColor3f(0.0, 0.0, 1.0);  
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi X o 0.5
    glTranslatef(0.5, 0.0, 0.0);
    //obrót wokó³ osi Y o 90 stopni
    glRotatef(90.0, 0.0, 1.0, 0.0);
    sciana();
  glPopMatrix();
  
  //œciana: x = -0.5
  
  glColor3f(1.0, 1.0, 0.0);
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi X o -0.5
    glTranslatef(-0.5, 0.0, 0.0);
    //obrót wokó³ osi Y o 90 stopni
    glRotatef(90.0, 0.0, 1.0, 0.0);
    sciana();
  glPopMatrix();
  
  //œciana: z = 0.5
  
  glColor3f(1.0, 0.0, 1.0);
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi Z o 0.5
    glTranslatef(0.0, 0.0, 0.5);
    sciana();
  glPopMatrix();
  
  //œciana: z = -0.5
  
  glColor3f(0.0, 1.0, 1.0);
  glPushMatrix();
    //przesuniêcie wzd³u¿ osi Z o -0.5
    glTranslatef(0.0, 0.0, -0.5);
    sciana();
  glPopMatrix();

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
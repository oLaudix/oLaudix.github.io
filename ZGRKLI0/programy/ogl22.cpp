#include <windows.h> 
										 
#include "freeglut.h"


//kwadrat o �rodku (0,0,0), le��cy w p�aszczy�nie XY
//o kraw�dziach d�ugo�ci 1, r�wnoleg�ych do osi X i Y

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
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);//"czyszczenie" t�a okan i bufora g��bokosci
glEnable(GL_DEPTH_TEST);//w��cznie algorytmu zas�aniania
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(60.0, 1.0, 0.1, 10.0); //bry�a widzenia perspektywicznego
gluLookAt(2.0,2.0,2.0, 0.0,0.0,0.0, 0.0,1.0,0.0);//obserwator 
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();


  //�ciana: y = 0.5
  
  glColor3f(1.0, 0.0, 0.0);  
  glPushMatrix();
    //przesuni�cie wzd�u� osi Y o 0.5
    glTranslatef(0.0, 0.5, 0.0);
    //obr�t wok� osi X o 90 stopni
    glRotatef(90.0, 1.0, 0.0, 0.0);
    sciana();
  glPopMatrix();
  
  //�ciana: y = -0.5
  glColor3f(0.0, 1.0, 0.0);  
  glPushMatrix();
    //przesuni�cie wzd�u� osi Y o -0.5
    glTranslatef(0.0, -0.5, 0.0);
    //obr�t wok� osi X o 90 stopni
    glRotatef(90.0, 1.0, 0.0, 0.0);
    sciana();
  glPopMatrix();
  
  //�ciana: x = 0.5
  
  glColor3f(0.0, 0.0, 1.0);  
  glPushMatrix();
    //przesuni�cie wzd�u� osi X o 0.5
    glTranslatef(0.5, 0.0, 0.0);
    //obr�t wok� osi Y o 90 stopni
    glRotatef(90.0, 0.0, 1.0, 0.0);
    sciana();
  glPopMatrix();
  
  //�ciana: x = -0.5
  
  glColor3f(1.0, 1.0, 0.0);
  glPushMatrix();
    //przesuni�cie wzd�u� osi X o -0.5
    glTranslatef(-0.5, 0.0, 0.0);
    //obr�t wok� osi Y o 90 stopni
    glRotatef(90.0, 0.0, 1.0, 0.0);
    sciana();
  glPopMatrix();
  
  //�ciana: z = 0.5
  
  glColor3f(1.0, 0.0, 1.0);
  glPushMatrix();
    //przesuni�cie wzd�u� osi Z o 0.5
    glTranslatef(0.0, 0.0, 0.5);
    sciana();
  glPopMatrix();
  
  //�ciana: z = -0.5
  
  glColor3f(0.0, 1.0, 1.0);
  glPushMatrix();
    //przesuni�cie wzd�u� osi Z o -0.5
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
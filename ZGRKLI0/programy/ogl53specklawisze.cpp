//program demonstruje dzia³anie funkcji glutSpecialFunc()
//Klawisze strza³ek i  klawisze  Page Up, Page Down powoduj¹ ruch obiektu wzduz osi 
//X,Y,Z
//Klawisze  Home, End, Ins powoduj¹ odpowiednio dodatnie obroty wokó³ osi X, Y, Z.

#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 


float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 20.0;//parametry dla gluPerspective(); 
 

//parametry ruchu
float pozycja[]={0.0, 0.0, 0.0}; //wspó³rzêdne œrodka kostki
float alfa[]={0.0, 0.0, 0.0};// pocz¹tkowe katy obrotu kostki wokó³ osi X,Y,Z
float przyrost_pozycji=0.1;
float przyrost_alfa=1.0;

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

void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glEnable(GL_DEPTH_TEST);
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
glLoadIdentity();
gluPerspective(fovy, aspect, near_, far_);
gluLookAt(7.0, 7.0, 7.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);

uklad();

glPushMatrix();

	glRotatef(alfa[0], 1.0, 0.0, 0.0);
	glRotatef(alfa[1], 0.0, 1.0, 0.0);
	glRotatef(alfa[2], 0.0, 0.0, 1.0);
	glTranslatef(pozycja[0], pozycja[1], pozycja[2]);

	kostka();

glPopMatrix();

glFlush();
glutSwapBuffers();
} 

void odrysuj(int szerokosc, int wysokosc){

	float  h = float(wysokosc), w = float(szerokosc);
	
	glViewport(0, 0, szerokosc, wysokosc);
	glLoadIdentity();
	gluPerspective(fovy, w/h, near_, far_);
	
}

void klawiatura(int  kod_klawisza, int x, int y)
{
  switch (kod_klawisza) {

  case GLUT_KEY_LEFT :
		   pozycja[0]-=przyrost_pozycji; 	
           glutPostRedisplay();
		   break;
		       
  case GLUT_KEY_RIGHT :
		   pozycja[0]+=przyrost_pozycji; 	
           glutPostRedisplay();
		   break;
	
  case GLUT_KEY_UP :
		   pozycja[1]+=przyrost_pozycji; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_DOWN :
		   pozycja[1]-=przyrost_pozycji; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_PAGE_UP :
		   pozycja[2]+=przyrost_pozycji; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_PAGE_DOWN :
		   pozycja[2]-=przyrost_pozycji; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_HOME :
		   alfa[0]+=przyrost_alfa; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_END :
		   alfa[1]+=przyrost_alfa; 	          
		   glutPostRedisplay();
		   break;

  case GLUT_KEY_INSERT :
		   alfa[2]+=przyrost_alfa; 	          
		   glutPostRedisplay();
		   break;
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

  glutSpecialFunc(klawiatura);
   
  glutMainLoop();
  
}
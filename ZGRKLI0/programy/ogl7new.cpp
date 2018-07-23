#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 

#include "tex.h"


float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 20.0;//parametry dla gluPerspective(); 

//parametry ruchu
float pozycja[]={0.0, 0.0, 0.0}; //wspó³rzêdne œrodka kostki
float alfa[]={0.0, 0.0, 0.0};// pocz¹tkowe katy obrotu kostki wokó³ osi X,Y,Z
float przyrost_pozycji=0.1;
float przyrost_alfa=1.0;
// prze³¹cznik teksturowania
int textureStatus =-1; // teksturowanie wy³¹czone 


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
	glColor3f(0.0, 1.0, 0.0);
	glTexCoord2f(0,0);
	glVertex3f( 0.5, 0.5,  0.5);
	glTexCoord2f(1,0);	
	glVertex3f( 0.5, 0.5, -0.5);
	glTexCoord2f(1,1);
	glVertex3f(-0.5, 0.5, -0.5);
	glTexCoord2f(0,1);
	glVertex3f(-0.5, 0.5,  0.5);
  glEnd();		
	

  glMatrixMode(GL_TEXTURE); //przejœcie na stos tekstur
  glPushMatrix();
	glScalef(2,2,1);//skalowanie tekstury
	 
	glBegin(GL_QUADS);
		//œciana: y = -0.5
		glColor3f(1.0, 0.0, 0.0);
		glTexCoord2f(0,0);
		glVertex3f( 0.5,  -0.5,  0.5);
		glTexCoord2f(1,0);
		glVertex3f( 0.5,  -0.5, -0.5);
		glTexCoord2f(1,1);
		glVertex3f(-0.5,  -0.5, -0.5);
		glTexCoord2f(0,1);
		glVertex3f(-0.5,  -0.5,  0.5);
	glEnd();	

  glPopMatrix();


  
  glPushMatrix();
	glRotatef(45,0,0,1); //obrót tekstury wokó³ osi prostopad³ej
	 
	glBegin(GL_QUADS);
  
		//œciana: x = 0.5
		  
		glColor3f(0.0, 0.0, 1.0);
		glTexCoord2f(-1,-1);	
		glVertex3f( 0.5,  0.5,  0.5);
		glTexCoord2f(1,-1);
		glVertex3f( 0.5,  0.5, -0.5);
		glTexCoord2f(1,1);
		glVertex3f( 0.5, -0.5, -0.5);
		glTexCoord2f(-1,1);
		glVertex3f( 0.5, -0.5,  0.5);

   glEnd();
	
   glPopMatrix();
  
  glPushMatrix();
	glTranslatef(0.5,0,0);// przesuniêcie tekstury wzduz osi s

  glBegin(GL_QUADS);
	//œciana: x = -0.5
	  
	glColor3f(1.0, 1.0, 0.0);
	glTexCoord2f(0,0);
	glVertex3f(-0.5,  0.5,  0.5);
	glTexCoord2f(1,0);
	glVertex3f(-0.5,  0.5, -0.5);
	glTexCoord2f(1,1);
	glVertex3f(-0.5, -0.5, -0.5);
	glTexCoord2f(0,1);
	glVertex3f(-0.5, -0.5,  0.5);
  
  glEnd();	

  glPopMatrix();

  glTexEnvi(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_MODULATE);//zmiana trybu na mieszanie z kolorem

  glBegin(GL_QUADS);
  //œciana: z = 0.5
 
  glColor3f(1.0, 0.0, 1.0);
  glTexCoord2f(0,0);
  glVertex3f( 0.5,  0.5,  0.5);
  glTexCoord2f(1,0);
  glVertex3f( 0.5, -0.5,  0.5);
  glTexCoord2f(1,1);
  glVertex3f(-0.5, -0.5,  0.5);
  glTexCoord2f(0,1);
  glVertex3f(-0.5,  0.5,  0.5);
  glEnd();
  
  glBegin(GL_QUADS);
	//œciana: z = -0.5
	glColor3f(0.0, 1.0, 1.0);
	glTexCoord2f(0,0);
	glVertex3f( 0.5,  0.5, -0.5);
	glTexCoord2f(1,0);
	glVertex3f( 0.5, -0.5, -0.5);
	glTexCoord2f(1,1);
	glVertex3f(-0.5, -0.5, -0.5);
	glTexCoord2f(0,1);
	glVertex3f(-0.5,  0.5, -0.5);
  glEnd();

glTexEnvi(GL_TEXTURE_ENV,GL_TEXTURE_ENV_MODE,GL_REPLACE);
  
glMatrixMode(GL_MODELVIEW);//powrót na stos modelview
}

void display() 
{
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

glDisable(GL_TEXTURE_2D);
uklad();


if (textureStatus == 1) 
	glEnable(GL_TEXTURE_2D);
else 
	glDisable(GL_TEXTURE_2D);

glPushMatrix();

	glRotatef(alfa[0], 1.0, 0.0, 0.0);
	glRotatef(alfa[1], 0.0, 1.0, 0.0);
	glRotatef(alfa[2], 0.0, 0.0, 1.0);
	glTranslatef(pozycja[0], pozycja[1], pozycja[2]);
	
	kostka();
	glPopMatrix();
	glMatrixMode(GL_MODELVIEW);
glPopMatrix();

glFlush();
glutSwapBuffers();
} 

void odrysuj(int szerokosc, int wysokosc){

	float  h = float(wysokosc), w = float(szerokosc);
	
	glViewport(0, 0, szerokosc, wysokosc);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(fovy, w/h, near_, far_);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
	gluLookAt(3.0, 3.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);
	
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

  case GLUT_KEY_F1 :
		   textureStatus*=-1;	
		   glutPostRedisplay();
		   break;	
  }
}

void init()
{
	glClearColor(1.0,1.0,1.0,1.0); 
	glEnable(GL_DEPTH_TEST);
	setTexture("z3.bmp",GL_REPLACE );
	
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
   
  init();

  glutMainLoop();
  
}

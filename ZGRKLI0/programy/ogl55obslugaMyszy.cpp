//program demonstruje dzia�anie funkcji glutMotionFunc() i glutPassiveMotionFunc() wsp�lnie z funkcjami glutMouseFunc() i glutSpecialFunc()
//Ruch myszy w oknie w prawo lub lewo (testowana jest tylko zmiana w poziemie) przy wci�ni�tych odpowiednio przyciskach: lewym, �rodkowym i prawym, powoduje zmian� pozycji kostki wzd�u� odpowiednio osi X, Y,Z
// Wcisni�cie klawisza Home na klawiaturze powoduje ze, przy braku wcisniecia jakiegokolwiek przycisku myszy, ruch kursora myszy w lewo, prawo lub w gor� powoduje dodatni obr�t kostki odpowiednio wok� osi X,Y,Z. 

#include <windows.h> 
										 
#include "freeglut.h"

#include <math.h> 


float fovy = 45.0, aspect = 1.0, near_ = 0.1, far_ = 20.0;//parametry dla gluPerspective(); 

//zmienna globalna s�u��ca do przekazania z funkcji glutMouseFunc do funkcji glutMotionFunc informacji kt�ry klawisz jest wcisni�ty 
int buttonDown=0;

//aktualna pozycja myszy przed kolejnym ruchem - inicjacja w funkcji glutMouseFunc()lub funkcji glutSpecialFunc()
int mouseX, mouseY;

//parametry ruchu
float pozycja[]={0.0, 0.0, 0.0}; //wsp�rz�dne �rodka kostki
float alfa[]={0.0, 0.0, 0.0};// pocz�tkowe katy obrotu kostki wok� osi X,Y,Z
float przyrost_pozycji=0.1;
float przyrost_alfa=1.0;



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



void kostka()
{
  glBegin(GL_QUADS);

  //�ciana: y = 0.5
  
  glColor3f(1.0, 0.0, 0.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //�ciana: y = -0.5
  
  glColor3f(0.0, 1.0, 0.0);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //�ciana: x = 0.5
  
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5,  0.5, -0.5);
  glVertex3f( 0.5, -0.5, -0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  
  //�ciana: x = -0.5
  
  glColor3f(1.0, 1.0, 0.0);
  glVertex3f(-0.5,  0.5,  0.5);
  glVertex3f(-0.5,  0.5, -0.5);
  glVertex3f(-0.5, -0.5, -0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  
  //�ciana: z = 0.5
  
  glColor3f(1.0, 0.0, 1.0);
  glVertex3f( 0.5,  0.5,  0.5);
  glVertex3f( 0.5, -0.5,  0.5);
  glVertex3f(-0.5, -0.5,  0.5);
  glVertex3f(-0.5,  0.5,  0.5);
  
  //�ciana: z = -0.5
  
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


  

void mysz(int przycisk, int stan, int x, int y)
{

  mouseX=x;//inicjacja potrzebna dla funkcji ruch()
  mouseY=y;
  if (stan == GLUT_DOWN) {  
    switch (przycisk) {
      case GLUT_LEFT_BUTTON:
							buttonDown=GLUT_LEFT_BUTTON;
                            break;
        
      case GLUT_MIDDLE_BUTTON:
                            buttonDown=GLUT_MIDDLE_BUTTON;
                            break;
      case GLUT_RIGHT_BUTTON:
                            buttonDown=GLUT_RIGHT_BUTTON;
                            break;
    }
  } 
  else if (stan == GLUT_UP){
	buttonDown=0;
  }
}

void ruch(int x, int y)
{

	switch (buttonDown){
	
      case GLUT_LEFT_BUTTON : 
	    if ((x-mouseX)<0) pozycja[0]-=przyrost_pozycji;
		else if ((x-mouseX)>0) pozycja[0]+=przyrost_pozycji;
		mouseX=x;
		mouseY=y;
		glutPostRedisplay();
		break;
      
      case GLUT_MIDDLE_BUTTON : 
	    if ((x-mouseX)<0) pozycja[1]-=przyrost_pozycji;
		else if ((x-mouseX)>0) pozycja[1]+=przyrost_pozycji;
		mouseX=x;
		mouseY=y;
		glutPostRedisplay();
		break;

      case GLUT_RIGHT_BUTTON : 
	    if ((x-mouseX)<0) pozycja[2]-=przyrost_pozycji;
		else if ((x-mouseX)>0) pozycja[2]+=przyrost_pozycji;
		mouseX=x;
		mouseY=y;
		glutPostRedisplay();
		break;
	}

}

void obrot(int x, int y)
{

	    if ((x-mouseX)<0) alfa[0]-=przyrost_alfa;
		else if ((x-mouseX)>0) alfa[1]+=przyrost_alfa;
		else if ((y-mouseY)>0) alfa[2]+=przyrost_alfa;
		mouseX=x;
		mouseY=y;
		glutPostRedisplay();
	
      
}


void klawiatura(int  kod_klawisza, int x, int y)
{

  mouseX=x;//inicjacja potrzebna dla funkcji obrot()
  mouseY=y;
  switch (kod_klawisza) {

  case GLUT_KEY_HOME :
		   glutPassiveMotionFunc(obrot);//w��czenie obs�ugi pasywnego ruchu myszy
		   break;
		       
  case GLUT_KEY_END :
		   glutPassiveMotionFunc(NULL); //wy��czenie obs�ugi pasywnego ruchu myszy
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

  glutMouseFunc(mysz);

  glutSpecialFunc(klawiatura);

  glutMotionFunc(ruch);
   
  glutMainLoop();
  
}
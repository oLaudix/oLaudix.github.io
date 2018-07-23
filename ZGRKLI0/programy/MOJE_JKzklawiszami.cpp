#include <windows.h> 
										 
#include "freeglut.h"

//wspolrzedne obserwatora

GLdouble eyex=0.0;
GLdouble eyey=0.0;
GLdouble eyez=30.0;

void prostopadloscian(GLfloat x, GLfloat y, GLfloat z, GLfloat dx, GLfloat dy, GLfloat dz)
{
glBegin(GL_QUADS);

  //gora,………………………………………. niebieski
   glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x, y+dy, z);
  glVertex3f( x+dx, y+dy, z);
  glVertex3f( x+dx, y+dy, z+dz);
  glVertex3f( x, y+dy, z+dz);
  
  //dol, ……………………………………………niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x, y, z);
  glVertex3f( x+dx, y, z);
  glVertex3f( x+dx, y, z+dz);
  glVertex3f( x, y, z+dz);
  
  //prawa, ……………………………………..niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x+dx, y, z);
  glVertex3f( x+dx, y, z+dz);
  glVertex3f( x+dx, y+dy, z+dz);
  glVertex3f( x+dx, y+dy, z);
  
  //lewa, ……………………………………….niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x, y, z);
  glVertex3f( x, y, z+dz);
  glVertex3f( x, y+dy, z+dz);
  glVertex3f( x, y+dy, z);
  
  //przod, ………………………………………czerwony
  glColor3f(1.0, 0.0, 0.0);
  glVertex3f( x, y, z);
  glVertex3f( x+dx, y, z);
  glVertex3f( x+dx, y+dy, z);
  glVertex3f( x, y+dy, z);
  
  //tyl, …………………………………………….zielony
  glColor3f(0.0, 1.0, 0.0);
  glVertex3f( x, y, z+dz);
  glVertex3f( x+dx, y, z+dz);
  glVertex3f( x+dx, y+dy, z+dz);
  glVertex3f( x, y+dy, z+dz);
  
glEnd();
}
void skos(GLfloat x, GLfloat y, GLfloat z, GLfloat ddx, GLfloat dkx, GLfloat dy, GLfloat dz)
{
glBegin(GL_QUADS);

  //gora,………………………………………. niebieski
   glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x, y+dy,  z);
  glVertex3f( x+dkx,  y+dy, z);
  glVertex3f( x+dkx,  y+dy, z+dz);
  glVertex3f( x,  y+dy, z+dz);
  
  //dol, ……………………………………………niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x+ddx,  y,  z);
  glVertex3f( x+ddx+dkx,  y, z);
  glVertex3f( x+ddx+dkx,  y, z+dz);
  glVertex3f( x+ddx,  y, z+dz);
  
  //prawa, ……………………………………..niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x+ddx+dkx, y,  z);
  glVertex3f( x+dkx, y+dy, z);
  glVertex3f( x+dkx, y+dy, z+dz);
  glVertex3f( x+ddx+dkx, y, z+dz);
  
  //lewa, ……………………………………….niebieski
  glColor3f(0.0, 0.0, 1.0);
  glVertex3f( x+ddx, y,  z);
  glVertex3f( x, y+dy, z);
  glVertex3f( x, y+dy, z+dz);
  glVertex3f( x+ddx, y, z+dz);
  
  //przod, ………………………………………czerwony
  glColor3f(1.0, 0.0, 0.0);
  glVertex3f( x+ddx,  y,  z);
  glVertex3f( x, y+dy,  z);
  glVertex3f( x+dkx, y+dy,  z);
  glVertex3f( x+ddx+dkx,  y,  z);
  
  //tyl, …………………………………………….zielony
  glColor3f(0.0, 1.0, 0.0);
  glVertex3f( x+ddx,  y,  z+dz);
  glVertex3f( x, y+dy,  z+dz);
  glVertex3f( x+dkx, y+dy,  z+dz);
  glVertex3f( x+ddx+dkx,  y,  z+dz);
  
glEnd();
}

void display() 
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);//"czyszczenie" t³a okan i bufora g³êbokosci
glEnable(GL_DEPTH_TEST);//w³¹cznie algorytmu zas³aniania
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(60.0, 1.0, 0.1, 50.0); //bry³a widzenia perspektywicznego
gluLookAt(eyex,eyey,eyez, 0.0,0.0,-50.0, 0.0,1.0,0.0);//obserwator 1
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

prostopadloscian(-12.0, 4.0, 2.0, 10.0, 2.0, -6.0);
prostopadloscian(-4.0, -6.0, 2.0, 2.0, 12.0, -6.0);
prostopadloscian(-8.0, -6.0, 2.0, 6.0, 2.0, -6.0);
skos(-12.0, -6.0, 2.0, 4.0, 2.0, 4.0, -6.0);
prostopadloscian(2.0, -6.0, 2.0, 2.0, 12.0, -6.0);
skos(12.0, 0.0, 2.0, -6.0, -2.0, 6.0, -6.0);
skos(12.0, 0.0, 2.0, -6.0, -2.0, -6.0, -6.0);

glFlush();
} 

//odrysowywanie okna renderingu

void Redisplay( int width, int height )
{
    // obszar renderingu - ca³e okno
    glViewport( 0, 0, width, height );
    
   // generowanie sceny 3D
     display();
}


//ruch obserwatora do przodu, do ty³u

void Klawiatura( unsigned char key, int x, int y )
{
    // klawisz +
    if( key == '+' )
         eyez -= 0.1;
    else
    // klawisz -
    if( key == '-' )
         eyez += 0.1;
    // odrysowanie okna
    Redisplay(glutGet(GLUT_WINDOW_WIDTH), glutGet( GLUT_WINDOW_HEIGHT));
}

//ruch obserwatora w poziomie i w pionie

void Strzalki(int key, int x, int y)
{
    switch(key)
    {
        // scena w lewo
    case GLUT_KEY_LEFT:
        eyex += 0.1;
        break;
        // scena w górê
    case GLUT_KEY_UP:
        eyey -= 0.1;
        break;
        // scena w prawo
    case GLUT_KEY_RIGHT:
        eyex -= 0.1;
        break;
        // scena w dó³
    case GLUT_KEY_DOWN:
        eyey += 0.1;
        break;
    }
    // odrysowanie okna
    Redisplay(glutGet(GLUT_WINDOW_WIDTH), glutGet(GLUT_WINDOW_HEIGHT));
}

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE | GLUT_DEPTH );
  glutInitWindowSize(800,600);
  glutInitWindowPosition(100,100);
  glutCreateWindow("Scena testowa Inicjaly JK");
  glutDisplayFunc(display);

      // do³¹czenie funkcji wywo³ywanej przy zmianie rozmiaru okna
  glutReshapeFunc(Redisplay);

    // do³¹czenie funkcji obs³ugi klawiatury
    glutKeyboardFunc(Klawiatura);
    
    // do³¹czenie funkcji obs³ugi klawiszy strza³ek
    glutSpecialFunc(Strzalki);


  glutMainLoop();
}

#include <windows.h>
#include "freeglut.h"
#include <math.h>
										 
float odleglosc = 30.0;
float katX = 0.00, katY = 0.00;
bool l1 = false, l2 = false;
#define PI_CONST 3.14159265358979323846
float katynaradiany(float alfa) {
	return alfa * (PI_CONST / 180);
}    
void rysujSfere(GLfloat x, GLfloat y, GLfloat z, GLfloat r){
	glPushMatrix();
	glTranslated(x,y,z);
	glutSolidSphere(r, 40, 40);
	glPopMatrix();
}
void rysujSzescian(GLfloat x, GLfloat y, GLfloat z, GLfloat rozmiar){
	glPushMatrix();
	glTranslated(x,y,z);
	glutSolidCube(rozmiar);
	glPopMatrix();
}
void rysujStozek(GLfloat x, GLfloat y, GLfloat z, GLfloat r, GLfloat h){
	glPushMatrix();
	glTranslated(x,y,z);
	glRotatef(-90.0, 1.0, 0.0, 0.0);
	glutSolidCone(r,h,20,10);
	glPopMatrix();
}
//zestaw #1 (jasnoczerwony i matowy)
void material(){
	GLfloat mat_ambient[] =  { 0.3, 0.0, 0.0, 1.0 };
	GLfloat mat_diffuse[] =  { 0.5, 0.1, 0.1, 1.0 };
	GLfloat mat_specular[] = { 0.1, 0.0, 0.0, 0.0 };
	GLfloat mat_shiness[] =  { 0.0 };
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);
	glMaterialfv(GL_FRONT, GL_SHININESS, mat_shiness);
}
//zestaw #2 (żółty, dobrze odbijający światło (błyszczący))
void material1(){

	GLfloat polysk_ambient[] =  { 0.75,		0.75,	  0.0 };
	GLfloat polysk_diffuse[] =  { 0.75,	    0.75,	  0.0 };
	GLfloat polysk_specular[] = { 1.0, 		1.0,	  1.0, 	  1.0 };
	GLfloat polysk_shiness[] =  { 0.8f * 128 };
	glMaterialfv(GL_FRONT, GL_SPECULAR, polysk_specular);
	glMaterialfv(GL_FRONT, GL_DIFFUSE, polysk_diffuse);
	glMaterialfv(GL_FRONT, GL_AMBIENT, polysk_ambient);
	glMaterialfv(GL_FRONT, GL_SHININESS, polysk_shiness);
}
//zestaw #3 jasnoniebieska
void material2(){
	GLfloat  ambient[] =  { 0.0,	0.0,	1.0};
	GLfloat  diffuse[] =  { 0.75,	0.75,	0.75};
	GLfloat  specular[] = { 0.04,	0.7,	0.7};
	GLfloat  shiness[] =  { 0.78125 };
	glMaterialfv(GL_FRONT, GL_SPECULAR, specular);
	glMaterialfv(GL_FRONT, GL_DIFFUSE, diffuse);
	glMaterialfv(GL_FRONT, GL_AMBIENT, ambient);
	glMaterialfv(GL_FRONT, GL_SHININESS, shiness);
}
void ustaw_kamere(){
	float camX = odleglosc * sin(katynaradiany(katX)) * cos(katynaradiany(katY));
	float camY = odleglosc *  sin((katynaradiany(katY)));
	float camZ = odleglosc * cos((katynaradiany(katX))) * cos((katynaradiany(katY)));
	float upX = odleglosc * sin(katynaradiany(katX)) * cos(katynaradiany(katY + 90));
	float upY = odleglosc *  sin(katynaradiany(katY + 90));
	float upZ = odleglosc * cos((katynaradiany(katX))) * cos(katynaradiany(katY + 90));
	gluLookAt(camX, camY, camZ, 0.0, 0.0, 0.0, upX, upY, upZ);
}
void swiatlo(){
	GLfloat lightColor[] = {1.0f, 1.0f, 1.0f, 1.0f};
	GLfloat light_position[] = { 33.0, 33.0, 33.0, 1 };
	GLfloat cutoff[] = {180};
	glEnable(GL_LIGHT0);
	glLightfv(GL_LIGHT0, GL_POSITION, light_position);
	glLightfv(GL_LIGHT0, GL_SPOT_CUTOFF, cutoff);     
}
void swiatlo1(){
	GLfloat lightColor1[] = {1.0f, 1.0f, 0.0f, 1.0f};
	GLfloat light_position1[] = { 1.0, 66.0, 1.0, 0 };
	glLightfv(GL_LIGHT1, GL_DIFFUSE, lightColor1);     
	glLightfv(GL_LIGHT1, GL_SHININESS, lightColor1); 
	glLightfv(GL_LIGHT1, GL_AMBIENT, lightColor1);     
	glLightfv(GL_LIGHT1, GL_POSITION, light_position1);
}
void swiatlo2(){
	GLfloat lightColor[] = {0.0f, 1.0f, 0.0f, 1.0f};
	GLfloat light_position2[] = { -33.0, 0.0, 33.0, 1 };
	// GLfloat v[] = {1.0};
	glLightfv(GL_LIGHT2, GL_POSITION, light_position2);
	glLightfv(GL_LIGHT2, GL_DIFFUSE, lightColor);     
	glLightfv(GL_LIGHT2, GL_SHININESS, lightColor); 
	glLightfv(GL_LIGHT2, GL_AMBIENT, lightColor);   
	// glLightfv(GL_LIGHT2, GL_LIGHT_MODEL_TWO_SIDE, v); 
}
void pokaz() {
	glClearColor(0.0,0.0,0.0,0.0); 
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);//"czyszczenie" tła okan i bufora głębokosci
	glEnable(GL_DEPTH_TEST);//włącznie algorytmu zasłaniania
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glEnable(GL_LIGHTING);
	gluPerspective(100.0, 1.0, 0.1, 100.0); //bryła widzenia perspektywicznego
	ustaw_kamere();
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
   	glClearColor (0.0, 0.0, 0.0, 0.0);
    swiatlo();
    swiatlo1();
    swiatlo2();
	// kula, sześcian, stożek powinien byd jasnoczerwony i matowy
   	material();
   	rysujSfere(0,0,0,6);
   	rysujSzescian(10,4,10,4);
   	rysujStozek(-10, 0, 10,2,4);
   	material1();
   	rysujSfere(0,6,0,4);
   	rysujSzescian(-10,4,-10,8);
   	rysujStozek(10, 0, -10,4,8);
   	material2();
   	rysujSfere(0,10,0,2);
	glPopMatrix();
	glFlush();
}
void klaw1(int key, int x, int y) {
	if (key == GLUT_KEY_UP) katY = (float)((360 + (int)katY + 5) % 360);
	else if (key == GLUT_KEY_DOWN) katY = (float)((360 + (int)katY - 5) % 360);
	else if (key == GLUT_KEY_LEFT) katX = (float)((360 + (int)katX + 5) % 360);
	else if (key == GLUT_KEY_RIGHT) katX = (float)((360 + (int)katX - 5) % 360);
	pokaz();
}
void klaw0(unsigned char key, int x, int y) {
	if (key == '1'){
		glEnable(GL_LIGHT1);
	}if (key == '2'){
		glDisable(GL_LIGHT1);
	}if (key == '8'){
		glEnable(GL_LIGHT2);
	}if (key == '9'){
		glDisable(GL_LIGHT2);
	}if (key == '+') odleglosc -= 0.5;
	else if (key == '-') odleglosc += 0.5;

		pokaz();
}
void przerysuj(int s, int w) {
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glViewport(0, 0, s, w);
	gluOrtho2D(0, s, w, 0);
	glMatrixMode(GL_MODELVIEW);
	glutPostRedisplay();
}
int main(int argc, char** argv)
{
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE | GLUT_DEPTH);
	glutInitWindowSize(400, 300);
	glutInitWindowPosition(100, 100);
	glutCreateWindow("Projekt 2");
	glutDisplayFunc(pokaz);
	glutKeyboardFunc(klaw0);
	glutSpecialFunc(klaw1);
	glutReshapeFunc(przerysuj);
	glutMainLoop();
	return 0;
}



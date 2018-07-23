#include <math.h>
#include <windows.h>
#include "freeglut.h"

	const float Pi=3.1415926535897932384626433832795;

	int windowPositionX = 100, windowPositionY = 100; //parametry dla glutInitWindowPosition()

	int windowSizeX = 800, windowSizeY = 800; //parametry dla glutInitWindowSize()

	double fovy = 89.0, aspect = 1.0, near_ = 1, far_ = 500.0;//parametry dla gluPerspective(); 


	float angle =0;//parametr animacyjny

//--------------Deklaracja i wartoœci inicjuj¹ce dla œwiate³ i materia³u ---------

	//globalna energia ambient   
	GLfloat scene_ambient[] = { 1.0, 1.0, 1.0, 1.0 }; 
	

	//specyfikacja Ÿród³a œwiat³a nr 0 - Ÿród³o izotropowe

	GLfloat light0_position[] = { 1.0, 1.0, 1.0, 1.0 };//po³o¿enie
	GLfloat light0_ambient[] = { 0.2, 0.2, 0.2, 1.0 };//energia ambient
	GLfloat light0_diffuse[] = { 1.0, 1.0, 1.0, 1.0 };//energia diffuse
	GLfloat light0_specular[] = { 1.0, 1.0, 1.0, 1.0 };//energia specular

	//specyfikacja Ÿród³a œwiat³a nr 1 - Ÿród³o kierunkowe

	GLfloat light1_position[] = { 0.0, 0.0, 0.0, 1.0 };//po³o¿enie
	GLfloat light1_ambient[] = { 0.0, 0.0, 0.0, 1.0 };//energia ambient
	GLfloat light1_diffuse[] = { 1.0, 1.0, 0.1, 1.0 };//energia diffuse
	GLfloat light1_specular[] = { 0.2, 0.1, 0.0, 1.0 };//energia specular
	GLfloat light1_spot_direction[] = { -5, -5, -10, 1.0 };//g³ówny kierunek œwiat³a
	GLint light1_spot_cutoff = 14;//zakres odchylenia od kierunk g³ównego
	GLint light1_spot_exponent = 29;//szybkoœæ wygaszania wewnatzr sto¿ka
	
	
	//specyfikacja materia³u

	GLfloat mat_ambient[]={ 1.0, 1.0, 1.0, 1.0 };//reakcja na energiê ambient
	GLfloat mat_diffuse[]={ 1.0, 1.0, 1.0, 1.0 };////reakcja na energiê diffuse
	GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };////reakcja na energiê specular
	GLfloat mat_emmision[] = { 0.0, 0.0, 0.0, 1.0 };//w³asnoœci emisyjne
	GLfloat mat_shininess = 10.0 ;//wspó³czynnik potêgowy dla reakcji na œwiat³o specular


	//funkcja pomocnicza rysuj¹ca przybli¿enie wielok¹towe powierzchni kuli

void kula(int m,int n, GLfloat r, GLfloat tx, GLfloat ty, GLfloat tz, GLfloat sx, GLfloat sy, GLfloat sz )
	//m (n) jest ilosci¹ segmentów na równole¿niku (po³owie po³udnika), r promieniem kuli 
{

	int i,j;
	GLdouble alpha,beta,r0,r1,z0,z1,x00,x01,x10,x11,y00,y01,y10,y11;

	alpha=0.5*Pi/float(n);
	beta=2*Pi/float(m);
	r0=r; 
	z0=0;

	glPushMatrix();
	glTranslated(tx,ty,tz);
	glScaled(sx,sy,sz);

	for(j=0;j<n-1;j++)
		{
			r1=r*cos(float((j+1))*alpha);
			z1=r*sin(float((j+1))*alpha);
			x01=r1;y01=0;
			x00=r0;y00=0;
			for(i=1;i<=m;i++)
				{
					x11=r1*cos(float(i)*beta);y11=r1*sin(float(i)*beta);
					x10=r0*cos(float(i)*beta);y10=r0*sin(float(i)*beta);
					glBegin(GL_POLYGON);
					//	glColor3f(1,0,0);
						glNormal3f(x00,y00,z0);
						glVertex3d(x00,y00,z0);
						glNormal3f(x10,y10,z0);
						glVertex3d(x10,y10,z0);
						glNormal3f(x11,y11,z1);
						glVertex3d(x11,y11,z1);
						glNormal3f(x01,y01,z1);
						glVertex3d(x01,y01,z1);
					glEnd();
					glBegin(GL_POLYGON);
					//	glColor3f(0,0,1);
						glNormal3f(x00,y00,-z0);
						glVertex3d(x00,y00,-z0);
						glNormal3f(x01,y01,-z1);
						glVertex3d(x01,y01,-z1);
						glNormal3f(x11,y11,-z1);
						glVertex3d(x11,y11,-z1);
						glNormal3f(x10,y10,-z0);
						glVertex3d(x10,y10,-z0);
					glEnd();
					x01=x11;y01=y11;
					x00=x10;y00=y10;
				}// end for i
			r0=r1;
			z0=z1;

		}//end for j

	glBegin(GL_TRIANGLE_FAN);
	glNormal3f(0,0,r);
	glVertex3f(0,0,r);
	for(i=0;i<=m;i++)
	{
		x10=r1*cos(float(i)*beta);y10=r1*sin(float(i)*beta);
		glNormal3f(x10,y10,z1);
		glVertex3f(x10,y10,z1);
	}
	glEnd();

	glBegin(GL_TRIANGLE_FAN);
	glNormal3f(0,0,-r);
	glVertex3f(0,0,-r);
	for(i=m;i>=0;i--)
	{
		x10=r1*cos(float(i)*beta);y10=r1*sin(float(i)*beta);
		glNormal3f(x10,y10,-z1);
		glVertex3f(x10,y10,-z1);
	}
	glEnd();

	glPopMatrix();

}//end kula()


	//funkcja pomocnicza rysuj¹ca skalowan¹, obracaln¹ i przesuwaln¹ kostkê [-1,1]^
void Cube(GLdouble sx, GLdouble sy, GLdouble sz, //skala
		  GLdouble alpha_x, GLdouble alpha_y, GLdouble alpha_z,//obroty
	      GLdouble tx, GLdouble ty, GLdouble tz	//translacja
		  )

{
	glPushMatrix();

	glTranslated(tx,ty,tz);
	glRotated(alpha_x,1.0,0.0,0.0);
	glRotated(alpha_y,0.0,1.0,0.0);
	glRotated(alpha_z,0.0,0.0,1.0);
    glScaled(sx,sy,sz);

	glBegin(GL_POLYGON);
	glNormal3f(1.0,0.0,0.0);
	glVertex3d(1,-1,-1);
	glVertex3d(1,1,-1);
	glVertex3d(1,1,1);
	glVertex3d(1,-1,1);
	glEnd();

	glBegin(GL_POLYGON);
	glNormal3f(-1.0,0.0,0.0);
	glVertex3d(-1,1,-1);
	glVertex3d(-1,-1,-1);
	glVertex3d(-1,-1,1);
	glVertex3d(-1,1,1);
	glEnd();

	glBegin(GL_POLYGON);
	glNormal3f(0.0,0.0,1.0);
	glVertex3d(1,1,1);
	glVertex3d(-1,1,1);
	glVertex3d(-1,-1,1);
	glVertex3d(1,-1,1);
	glEnd();

	glBegin(GL_POLYGON);
	glNormal3f(0.0,0.0,-1.0);
	glVertex3d(1,1,-1);
	glVertex3d(1,-1,-1);
	glVertex3d(-1,-1,-1);
	glVertex3d(-1,1,-1);
	glEnd();

	glBegin(GL_POLYGON);
	glNormal3f(0.0,1.0,0.0);
	glVertex3d(1,1,1);
	glVertex3d(1,1,-1);
	glVertex3d(-1,1,-1);
	glVertex3d(-1,1,1);
	glEnd();

	glBegin(GL_POLYGON);
	glNormal3f(0.0,-1.0,0.0);
	glVertex3d(1,-1,1);
	glVertex3d(-1,-1,1);
	glVertex3d(-1,-1,-1);
	glVertex3d(1,-1,-1);
	glEnd();

	glPopMatrix();

}
   
void init(void) 
{   
 glClearColor (0.1, 0.1, 0.1, 1.0);
 glEnable(GL_DEPTH_TEST);
 glEnable(GL_NORMALIZE);
 glEnable(GL_CULL_FACE);
 glCullFace(GL_BACK);	
}



void display_1(void)//globalne œwiat³o ambient
{
	scene_ambient[0]=1.0;
	scene_ambient[1]=1.0;
	scene_ambient[2]=1.0;

	mat_ambient[0]=0.5;
	mat_ambient[1]=0.5;
	mat_ambient[2]=0.5;
	
    glEnable(GL_LIGHTING);//w³¹czenie mechanizmu oœwietlenia
 
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

    glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

    glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	
	kula(200,200,70,0,0,0,1,1,1); 

	mat_ambient[1]=0.0; //wczeœniejsza wartoœc =1.0
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

	kula(100,100,70,150,0,0,1,1,1);

    glFlush();
    glutSwapBuffers();
}






void display_2(void)//punktowe œwiat³o ambient
{

	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	
	mat_ambient[0]=0.5;
	mat_ambient[1]=0.5;
	mat_ambient[2]=0.5;

	light0_position[0]=120.0;
	light0_position[1]=200.0;
	light0_position[2]=120.0;

	light0_ambient[0]=1.0;
	light0_ambient[1]=1.0;
	light0_ambient[2]=1.0;
	
    glEnable(GL_LIGHTING);//w³¹czenie mechanizmu oœwietlenia
    glEnable(GL_LIGHT0);//w³¹czenie swiat³a nr 0

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_AMBIENT, light0_ambient);
    
	//wyzerowanie reakcji na energiê diffuse, która domyœlnie jest dodatnia
	//a energia diffuse równie¿ jest domyœlnie dodatnia, wiêc któryœ z tych
	//wektorów trzeba wyzerowaæ, aby wyeliminowaæ energiê diffuse ze sceny
	mat_diffuse[0]=mat_diffuse[1]=mat_diffuse[2]=0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
   
	kula(200,200,70,0,0,0,1,1,1);

	mat_ambient[1]=0.0;
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

	kula(100,100,70,150,0,0,1,1,1);
    
    glFlush();
    glutSwapBuffers();
}




void display_3(void)//globalne  i punktowe œwiat³a ambient
{

	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	scene_ambient[0]=1.0;
	scene_ambient[1]=1.0;
	scene_ambient[2]=1.0;

    mat_ambient[0]=0.5;
	mat_ambient[1]=0.5;
	mat_ambient[2]=0.5;

	light0_position[0]=120.0;
	light0_position[1]=200.0;
	light0_position[2]=120.0;

	light0_ambient[0]=1.0;
	light0_ambient[1]=1.0;
	light0_ambient[2]=1.0;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

	glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	//wyzerowanie reakcji na energiê diffuse 
    mat_diffuse[0]=mat_diffuse[1]=mat_diffuse[2]=0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

    glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
    glLightfv(GL_LIGHT0, GL_AMBIENT, light0_ambient); 

    glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

    
   
	kula(200,200,70,0,0,0,1,1,1);

	mat_ambient[1]=0.0;
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);
    
	kula(100,100,70,150,0,0,1,1,1);
    
    glFlush();
    glutSwapBuffers();
}


void display_4(void)//punktowe œwiat³o diffuse
{
	
	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	light0_position[0]=120.0;
	light0_position[1]=100.0;
	light0_position[2]=120.0;

	light0_diffuse[0]=1;
	light0_diffuse[1]=1;
	light0_diffuse[2]=1;

	mat_diffuse[0]=0.14;
	mat_diffuse[1]=0.1;
	mat_diffuse[2]=0.91;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

	//wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

    glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
    
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

	kula(200,200,70,0,0,0,1,1,1);

	mat_diffuse[1]=1.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	kula(200,200,70,150,0,0,1,1,1);

    glFlush();
    glutSwapBuffers();
}


void display_5(void)//punktowe œwiat³o diffuse + globalne œwiat³o ambient
{
	
	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	light0_position[0]=120.0;
	light0_position[1]=100.0;
	light0_position[2]=120.0;


	light0_diffuse[0]=1;
	light0_diffuse[1]=1;
	light0_diffuse[2]=1;

	mat_diffuse[0]=0.14;
	mat_diffuse[1]=0.1;
	mat_diffuse[2]=0.91;


	mat_ambient[0]=0.5;
	mat_ambient[1]=0.5;
	mat_ambient[2]=0.5;

	scene_ambient[0]=0.2;
	scene_ambient[1]=0.2;
	scene_ambient[2]=0.1;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);
    
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

    glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
 
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
   
	kula(200,200,70,0,0,0,1,1,1);

	mat_diffuse[1]=1.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	kula(200,200,70,120,0,0,1,1,1);
    
    glFlush();
    glutSwapBuffers();
}



void display_6(void)//punktowe œwiat³o specular
{
	
	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	

	mat_ambient[0]=0.0;
	mat_ambient[1]=0.0;
	mat_ambient[2]=0.0;

	mat_specular[0]=1.0;
	mat_specular[1]=1.0;
    mat_specular[2]=1.0;
	
    mat_shininess=40.0;

	light0_position[0]=0.0;
	light0_position[1]=0.0;
	light0_position[2]=700.0;
		
	light0_specular[0]=0.5;
	light0_specular[1]=0.1;
	light0_specular[2]=0.1;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora

	//wyzerowanie reakcji na energiê diffuse
    mat_diffuse[0]=mat_diffuse[1]=mat_diffuse[2]=0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_SPECULAR, light0_specular);

	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess );

	kula(200,200,70,0,0,0,1,1,1);

	mat_specular[1]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
    
	kula(100,100,70,150,0,0,1,1,1);    

    glFlush();
    glutSwapBuffers();
}

void display_7(void)//punktowe œwiat³a specular i diffuse
{	
	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	mat_specular[0]=1.0;
	mat_specular[1]=1.0;
    mat_specular[2]=1.0;

    
	mat_diffuse[0]=0.9;
	mat_diffuse[1]=0.9;
    mat_diffuse[2]=0.9;
	
	mat_shininess=100.0;

	mat_ambient[0]=0.0;
	mat_ambient[1]=0.0;
	mat_ambient[2]=0.0;

	light0_position[0]=-700.0;
	light0_position[1]=-700.0;
	light0_position[2]=700.0;
	
	light0_specular[0]=0.5;
	light0_specular[1]=0.1;
	light0_specular[2]=0.1;

	light0_diffuse[0]=0.5;
	light0_diffuse[1]=0.1;
	light0_diffuse[2]=0.1;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora

	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
	glLightfv(GL_LIGHT0, GL_SPECULAR, light0_specular);

    glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess );

	kula(200,200,70,0,0,0,1,1,1);

	mat_specular[1]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

	mat_diffuse[1]=0.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	kula(100,100,70,150,0,0,1,1,1);    

    glFlush();
    glutSwapBuffers();
}


void display_8(void)//punktowe œwiat³a specular i diffuse + globalne œwiat³o ambient
{

	glLoadIdentity();

	gluLookAt(190.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);
	
	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	mat_specular[0]=1.0;
	mat_specular[1]=1.0;
    mat_specular[2]=1.0;
	   
	mat_diffuse[0]=0.9;
	mat_diffuse[1]=0.9;
    mat_diffuse[2]=0.9;
	
	mat_shininess=100.0;

	mat_ambient[0]=0.2;
	mat_ambient[1]=0.2;
	mat_ambient[2]=0.2;
	
	light0_position[0]=-700.0;
	light0_position[1]=-700.0;
	light0_position[2]=700.0;
	
	light0_specular[0]=0.5;
	light0_specular[1]=0.1;
	light0_specular[2]=0.1;
		
	light0_diffuse[0]=0.5;
	light0_diffuse[1]=0.1;
	light0_diffuse[2]=0.1;
	
    scene_ambient[0]=0.5;
	scene_ambient[1]=0.1;
	scene_ambient[2]=0.1;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora
	
	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
    glLightfv(GL_LIGHT0, GL_SPECULAR, light0_specular);

	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);	
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess );

	kula(200,200,70,0,0,0,1,1,1);

	mat_specular[1]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

	mat_diffuse[1]=0.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	kula(100,100,70,150,0,0,1,1,1);    

    glFlush();
    glutSwapBuffers();
}



void display_9(void)//kierunkowe œwiat³o diffuse
{
	glLoadIdentity();

	gluLookAt(100.0, 200.0, 130.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);

	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	mat_ambient[0]=0.5;
	mat_ambient[1]=0.5;
	mat_ambient[2]=0.5;
	
	mat_diffuse[0]=1.0;
	mat_diffuse[1]=1.0;
	mat_diffuse[2]=1.0;
	
	light1_position[0]=150.0;
	light1_position[1]=150.0;
	light1_position[2]=100.0;
	
	light1_diffuse[0]=1.0;
	light1_diffuse[1]=1.0;
	light1_diffuse[2]=0.2;
	
	light1_spot_direction[0]=-1;
	light1_spot_direction[1]=-1;
	light1_spot_direction[2]=-1;
	
    light1_spot_exponent =100;
    light1_spot_cutoff = 65;//zmieniæ póŸniej na 180 dla porównania 

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT1);

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);
 	
	glLightfv(GL_LIGHT1, GL_POSITION, light1_position);
	glLightfv(GL_LIGHT1, GL_DIFFUSE, light1_diffuse);
	glLightfv(GL_LIGHT1, GL_SPOT_DIRECTION, light1_spot_direction); 
    glLightf(GL_LIGHT1, GL_SPOT_EXPONENT, light1_spot_exponent);
    glLightf(GL_LIGHT1, GL_SPOT_CUTOFF, light1_spot_cutoff);

    glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

	kula(200,200,60,0,0,0,1,1,1);

	mat_diffuse[0]=0.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
    
	kula(100,100,60,120,0,0,1,1,1);
    
    glFlush();
    glutSwapBuffers();
}



void display_10(void)//kierunkowe œwiat³o specular
{

	glLoadIdentity();

	gluLookAt(0.1, 0.0, -200.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	

	mat_specular[0]=1.0;
	mat_specular[1]=1.0;
	mat_specular[2]=1.0;

	mat_ambient[0]=0.0;
	mat_ambient[1]=0.0;
	mat_ambient[2]=0.0;

	mat_shininess=100.0;

	light1_position[0]=0.0;
	light1_position[1]=0.0;
	light1_position[2]=100.0;
	
	light1_specular[0]=0.9;
	light1_specular[1]=0.9;
	light1_specular[2]=0.9;

	light1_spot_direction[0]=0;
	light1_spot_direction[1]=0;
	light1_spot_direction[2]=-1;
	
    light1_spot_exponent =1;
    light1_spot_cutoff = 65;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT1);

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0.0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora

	//wyzerowanie reakcji na energiê diffuse
    mat_diffuse[0]=mat_diffuse[1]=mat_diffuse[2]=0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

	glLightfv(GL_LIGHT1, GL_POSITION, light1_position);
	glLightfv(GL_LIGHT1, GL_SPECULAR, light1_specular);
    glLightfv(GL_LIGHT1, GL_SPOT_DIRECTION, light1_spot_direction); 
    glLightf(GL_LIGHT1, GL_SPOT_EXPONENT, light1_spot_exponent);
    glLightf(GL_LIGHT1, GL_SPOT_CUTOFF, light1_spot_cutoff);
 
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
   
	kula(200,200,60,-50,0,0,1,1,1);

	mat_specular[0]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
    
	kula(400,400,50,70,0,0,1,1,1);
    
    glFlush();
    glutSwapBuffers();
}





void idle(){

	
	angle +=0.05;
	
	glutPostRedisplay();

}


void display_11(void)//punktowe œwiat³a specular i diffuse + kierunkowe œwiat³o diffuse
{
	glutIdleFunc(idle);

	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	glLoadIdentity();

	gluLookAt(130.0, 210.0, 40.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0);

	mat_specular[0]=1.0;
	mat_specular[1]=1.0;
    mat_specular[2]=1.0;
	    
	mat_diffuse[0]=0.9;
	mat_diffuse[1]=0.9;
    mat_diffuse[2]=0.9;
	
	mat_shininess=100.0;

	mat_ambient[0]=0.0;
	mat_ambient[1]=0.0;
	mat_ambient[2]=0.0;
	


	light0_position[0]=200;//-700.0;
	light0_position[1]=200;//-700.0;
	light0_position[2]=201;//700.0;
	light0_position[3]=1;//700.0;

	light0_specular[0]=0.5;
	light0_specular[1]=0.1;
	light0_specular[2]=0.1;
	
	light0_diffuse[0]=0.5;
	light0_diffuse[1]=0.1;
	light0_diffuse[2]=0.1;
	
	light1_position[0]=300*cos(angle);
	light1_position[1]=300*sin(angle);
	light1_position[2]=20;
	light1_spot_direction[0]=-300*cos(angle);
	light1_spot_direction[1]=-300*sin(angle);
	light1_spot_direction[2]=-20;

	light1_diffuse[0]=1.0;
	light1_diffuse[1]=1.0;
	light1_diffuse[2]=1.0;
	
    light1_spot_exponent =40;
    light1_spot_cutoff = 40;

    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);
	glEnable(GL_LIGHT1);

    //wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora	
    
	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
	glLightfv(GL_LIGHT0, GL_SPECULAR, light0_specular);
	
    glLightfv(GL_LIGHT1, GL_POSITION, light1_position);
	glLightfv(GL_LIGHT1, GL_DIFFUSE, light1_diffuse);
	glLightfv(GL_LIGHT1, GL_SPOT_DIRECTION, light1_spot_direction); 
    glLightf(GL_LIGHT1, GL_SPOT_EXPONENT, light1_spot_exponent);
    glLightf(GL_LIGHT1, GL_SPOT_CUTOFF, light1_spot_cutoff);
 
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess );
  
	kula(100,100,70,0,0,0,1,1,0.5);
	
	mat_specular[1]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	mat_diffuse[1]=0.0;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	kula(60,30,70,120,0,0,0.5,0.5,1);    
	
	mat_specular[2]=0.0;
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	mat_diffuse[0]=0.1;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	Cube(10,45,15,0,0,0,90,90,-20);
    
	glFlush();
    glutSwapBuffers();
}



void display_12(void)//demo diffuse
{

	mat_specular[0]=0.0;
	mat_specular[1]=0.0;
	mat_specular[2]=0.0;

	mat_ambient[0]=0.0;
	mat_ambient[1]=0.0;
	mat_ambient[2]=0.0;

	mat_shininess=100.0;

	light0_position[0]=0.0;
	light0_position[1]=0.0;
	light0_position[2]=0.3;
	
	light0_diffuse[0]=0.0;
	light0_diffuse[1]=110.9;
	light0_diffuse[2]=0.9;

	
    glEnable(GL_LIGHTING);
    glEnable(GL_LIGHT0);

	glLoadIdentity();
	gluLookAt(0.1, 0, 200.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	

    
	//wyzerowanie globalnego œwiat³a ambient	
    scene_ambient[0]=scene_ambient[1]=scene_ambient[2]=0.0;
    glLightModelfv(GL_LIGHT_MODEL_AMBIENT,scene_ambient);

	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER,1);//ustawienie œledzenie wektora obserwatora

	//wyzerowanie reakcji na energiê diffuse
    mat_diffuse[0]=mat_diffuse[1]=mat_diffuse[2]=1;
	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
		
	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
    
	glMatrixMode(GL_MODELVIEW);
	


   
	
	glBegin(GL_QUADS);
		glNormal3f(0,0,1);
		for (int i=-100;i<100;i++)
			for (int j=-100;j<100;j++)
			{
				glVertex3f(i,j,0);
				glVertex3f(i+1,j,0);
				glVertex3f(i+1,j+1,0);
				glVertex3f(i,j+1,0);
			}
	glEnd();

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
}





void main(int argc, char** argv)
{
	glutInit(&argc, argv);	
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
	glutInitWindowPosition(windowPositionX, windowPositionY);
	glutInitWindowSize(windowSizeX, windowSizeY);
	glutCreateWindow("light");
	glutDisplayFunc(display_12);
	glutReshapeFunc(odrysuj);
	init();
	glutMainLoop();
}



#define _USE_MATH_DEFINES
#include <math.h>
#include "freeglut.h"
#include <iostream>

#pragma region CAMERA_DATA
float pitch = 0.0f, yaw = M_PI / 2.0f;
float x = 0.0f, y = 0.0f, z = 50.0f;
float camRadius = 50.0f;
float fovy = 60.0, aspect = 1.0, near_ = 1, far_ = 1000.0;
#pragma endregion

GLfloat scene_ambient[] = { 1.0, 1.0, 1.0, 1.0 };

//parametry zrodla swiatla nr 0
GLfloat light0_position[] = { 1.0, 1.0, 1.0, 1.0 };
GLfloat light0_diffuse[] = { 1.0, 1.0, 1.0, 1.0 };

//parametry zrodla swiatla nr 1
GLfloat light1_position[] = { 0.0, 0.0, 0.0, 1.0 };
GLfloat light1_ambient[] = { 0.0, 0.0, 0.0, 1.0 };
GLfloat light1_diffuse[] = { 1.0, 1.0, 0.1, 1.0 };
GLfloat light1_specular[] = { 0.2, 0.1, 0.0, 1.0 };
GLfloat light1_spot_direction[] = { -5, -5, -10, 1.0 };
GLint light1_spot_cutoff = 10;
GLint light1_spot_exponent = 20;

//parametry zrodla swiatla nr 2
GLfloat light2_position[] = { 0.0, 0.0, 0.0, 0.0 };
GLfloat light2_diffuse[] = { 1.0, 1.0, 0.1, 1.0 };
GLfloat light2_specular[] = { 0.2, 0.1, 0.0, 1.0 };

//specyfikacja materialu
GLfloat mat_ambient[] = { 1.0, 1.0, 1.0, 1.0 };
GLfloat mat_diffuse[] = { 1.0, 1.0, 1.0, 1.0 };
GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };
GLfloat mat_emmision[] = { 0.0, 0.0, 0.0, 1.0 };
GLfloat mat_shininess = 10.0;

void changeSize(int width, int height) {
	/*
	if (height == 0) {
	height = 1;
	}

	float ratio = width / height;

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	glViewport(0, 0, width, height);
	gluPerspective(45, ratio, 1, 1000);

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
	*/

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	float  h = float(height), w = float(width);
	glViewport(0, 0, width, height);
	gluPerspective(fovy, w / h, near_, far_);

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

void drawSphere(float x, float y, float z, float radius) {
	glTranslatef(x, y, z);
	glutSolidSphere(radius, 40, 40);
	glTranslatef(-x, -y, -z);
}

void drawCube(float x, float y, float z, float size) {
	glTranslatef(x, y, z);
	glutSolidCube(size);
	glTranslatef(-x, -y, -z);
}

void drawCone(float x, float y, float z, float radius, float height) {
	glTranslatef(x, y, z);
	glRotatef(-90.0f, 1.0f, 0.0f, 0.0f);
	glutSolidCone(radius, height, 40, 40);
	glRotatef(90.0f, 1.0f, 0.0f, 0.0f);
	glTranslatef(-x, -y, -z);
}

void processNormalKeys(unsigned char key, int xx, int yy) {
	float adSubPercent = 0.05f;

	if (key == 43) {
		//plus
		camRadius -= camRadius * adSubPercent;

		x -= x * adSubPercent;
		y -= y * adSubPercent;
		z -= z * adSubPercent;
	} else if (key == 45) {
		//minus
		camRadius += camRadius * adSubPercent;

		x += x * adSubPercent;
		y += y * adSubPercent;
		z += z * adSubPercent;
	}

	if (key == '1') {
		glEnable(GL_LIGHT0); //wlaczenie zrodla swiatla 0
	} else if (key == '2') {
		glDisable(GL_LIGHT0); // wylaczenie zrodla swiatla 0
	} else if (key == '8') {
		glEnable(GL_LIGHT1); // wlaczenie zrodla swiatla 1
	} else if (key == '9') {
		glDisable(GL_LIGHT1); // wylaczenie zrodla swiatla 1
	}
}

void processSpecialKeys(int key, int xx, int yy) {
	switch (key) {
		case GLUT_KEY_LEFT:
			yaw -= 0.01f;
			break;

		case GLUT_KEY_RIGHT:
			yaw += 0.01f;
			break;

		case GLUT_KEY_UP:
			pitch += 0.01f;
			break;

		case GLUT_KEY_DOWN:
			pitch -= 0.01f;
			break;
	}

	x = camRadius * -cos(yaw) * cos(pitch);
	y = camRadius * sin(pitch);
	z = camRadius * sin(yaw) * cos(pitch);
}

void renderScene() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();
	gluLookAt( x, y, z, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f);

	//wyzerowanie globalnego swiatla
	scene_ambient[0] = scene_ambient[1] = scene_ambient[2] = 0;
	glLightModelfv(GL_LIGHT_MODEL_AMBIENT, scene_ambient);
	glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER, 1);

#pragma region LIGHT0
	light0_position[0] = -10.0;
	light0_position[1] = 15.0;
	light0_position[2] = 20.0;

	light0_diffuse[0] = 0.5;
	light0_diffuse[1] = 1.0;
	light0_diffuse[2] = 0.9;

	glLightfv(GL_LIGHT0, GL_POSITION, light0_position);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, light0_diffuse);
#pragma endregion

#pragma region LIGHT1
	light1_position[0] = 18.0;
	light1_position[1] = 6.0;
	light1_position[2] = 15;

	light1_diffuse[0] = 0.2;
	light1_diffuse[1] = 0.5;
	light1_diffuse[2] = 0.7;

	light1_spot_direction[0] = -1;
	light1_spot_direction[1] = -1;
	light1_spot_direction[2] = -1;

	light1_spot_exponent = 90;
	light1_spot_cutoff = 100;

	glLightfv(GL_LIGHT1, GL_POSITION, light1_position);
	glLightfv(GL_LIGHT1, GL_DIFFUSE, light1_diffuse);
	glLightfv(GL_LIGHT1, GL_SPOT_DIRECTION, light1_spot_direction);
	glLightf(GL_LIGHT1, GL_SPOT_EXPONENT, light1_spot_exponent);
	glLightf(GL_LIGHT1, GL_SPOT_CUTOFF, light1_spot_cutoff);
#pragma endregion

#pragma region LIGHT2
	light2_position[0] = -18.0;
	light2_position[1] = -6.0;
	light2_position[2] = -15;

	light2_diffuse[0] = 0.2;
	light2_diffuse[1] = 0.1;
	light2_diffuse[2] = 0.3;

	light2_specular[0] = 0.1;
	light2_specular[1] = 0.1;
	light2_specular[2] = 0.1;

	glLightfv(GL_LIGHT2, GL_POSITION, light2_position);
	glLightfv(GL_LIGHT2, GL_DIFFUSE, light2_diffuse);
	glLightfv(GL_LIGHT2, GL_SPECULAR, light2_specular);
#pragma endregion

#pragma region MATERIAL0
	mat_diffuse[0] = 0.0;
	mat_diffuse[1] = 0.4;
	mat_diffuse[2] = 1.0;

	mat_specular[0] = 0.0;
	mat_specular[1] = 0.4;
	mat_specular[2] = 1.0;

	mat_shininess = 0.0;

	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess);
#pragma endregion
	//jasnoniebieski matowy
	drawSphere(0.0f, 0.0f, 0.0f, 6.0f);
	drawCube(10.0f, 4.0f, -10.0f, 8.0f);
	drawCone(10.0f, 2.0f, 10.0f, 2.0f, 4.0f);

#pragma region MATERIAL1
	mat_ambient[0] = 1.0;
	mat_ambient[1] = 0.0;
	mat_ambient[2] = 0.0;

	mat_diffuse[0] = 1.0;
	mat_diffuse[1] = 0.0;
	mat_diffuse[2] = 0.0;

	mat_specular[0] = 10.0;
	mat_specular[1] = 0.1;
	mat_specular[2] = 0.1;

	mat_shininess = 40.0;

	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess);
#pragma endregion
	//jasnoczerwony blyszczacy
	drawCube(-10.0f, 4.0f, 10.0f, 4.0f);
	drawCone(-10.0f, 0.0f, -10.0f, 4.0f, 8.0f);
	drawSphere(0.0f, 6.0f, 0.0f, 4.0f);

#pragma region MATERIAL2
	mat_diffuse[0] = 0.0;
	mat_diffuse[1] =8.0;
	mat_diffuse[2] = 0.0;

	mat_specular[0] = 0.0;
	mat_specular[1] = 8.0;
	mat_specular[2] = 0.0;

	mat_ambient[0] = 0.0;
	mat_ambient[1] = 8.0;
	mat_ambient[2] = 0.0;

	mat_shininess = 50.0;

	glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);
	glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
	glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);
	glMaterialf(GL_FRONT, GL_SHININESS, mat_shininess);
#pragma endregion
	//jasnozielony
	drawSphere(0.0f, 10.0f, 0.0f, 2.0f);

	glFlush();
	glutSwapBuffers();
}

void init() {
	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT0);
	glEnable(GL_LIGHT1);
	glEnable(GL_LIGHT2);
}

void main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
	glutInitWindowSize(600, 600);
	glutInitWindowPosition(300, 100);
	glutCreateWindow("Projekt 2");

	init();

	glEnable(GL_DEPTH_TEST);
	glutDisplayFunc(renderScene);
	glutIdleFunc(renderScene);

	glutSpecialFunc(processSpecialKeys);
	glutKeyboardFunc(processNormalKeys);

	glutReshapeFunc(changeSize);
	glutMainLoop();
}
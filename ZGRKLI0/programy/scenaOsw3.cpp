#define _USE_MATH_DEFINES

#include "freeglut.h"
#include <windows.h>
#include <stdio.h> 
#include <math.h>

double camera_x = 0.0;
double camera_y = 0.0;
double camera_z = 0.0;

double camera_orientation = 1;

double zoom = 30.0;

double min_zoom = 10.0;
double max_zoom = 80.0;

double yaw = 0.0;
double pitch = 0.0;

void keyboardFunc(unsigned char key, int x, int y)
{
    switch(key)
    {
        // Zoom in
        case '+':
            if(zoom > min_zoom)
                zoom -= 1; 
            break;

        // Zoom out
        case '-':
            if(zoom < max_zoom)
                zoom += 1;
            break;

        // Light 0 ON
        case '1':
            glEnable(GL_LIGHT2);
            break;

        // Light 0 OFF
        case '2':
            glDisable(GL_LIGHT2);
            break;

        // Light 2 ON
        case '8':
            glEnable(GL_LIGHT0);
            break;

        // Light 2 OFF
        case '9':
            glDisable(GL_LIGHT0);
            break;
        
        // Exit app
        case 27:
            exit(0);
            break;
    }
}

void specialFunc(int key, int x, int y)
{
    float speed = 5;

    switch(key)
    {
        case GLUT_KEY_RIGHT:
            pitch += speed * M_PI/180;
            break;

        case GLUT_KEY_LEFT:
            pitch -= speed * M_PI/180;
            break;
            
        case GLUT_KEY_DOWN:
            if( sin(yaw) == 1 || sin(yaw) == -1 )
                camera_orientation = -camera_orientation;

            if( -yaw > 2 * M_PI ) yaw = 0;

            yaw -= speed * M_PI/180;
            break;

        case GLUT_KEY_UP:
            if( sin(yaw) == 1 || sin(yaw) == -1 )
                camera_orientation = -camera_orientation;

            if( yaw > 2 * M_PI ) yaw = 0;

            yaw += speed * M_PI/180;
            break;
    }
}

void calculateCameraPosition()
{
    camera_x = sin(pitch) * cos(yaw) * zoom;
    camera_z = cos(pitch) * cos(yaw) * zoom;
    camera_y = sin(yaw) * zoom;
}

void display()
{
  GLfloat colors[3][3] = {
    {0.8, 0.8, 1.0},
    {1.0, 0.5, 0.5},
    {0.7, 1.0, 0.7}
  };

  GLfloat specular[3][3] = {
    {0.0, 0.0, 0.0},
    {8.0, 8.0, 8.0},
    {1.0, 1.0, 1.0}
  };

  GLfloat shininess[3][3] = {
    {0.0, 0.0, 0.0},
    {16.0, 16.0, 12.0},
    {7.5, 7.5, 7.5}
  };

  // Set bacground color
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

  // Render scene

  // Sphere I
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[0]);
  glPushMatrix();
    glTranslatef(0, 0, 0);
    glutSolidSphere(6, 50, 50);
  glPopMatrix();

  // Sphere II
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[1]);
  glPushMatrix();
    glTranslatef(0, 6, 0);
    glutSolidSphere(4, 50, 50);
  glPopMatrix();

  // Sphere III
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[2]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[2]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[2]);
  glPushMatrix();
    glTranslatef(0, 10, 0);
    glutSolidSphere(2, 50, 50);
  glPopMatrix();

  // Cube I
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[0]);
  glPushMatrix();
    glTranslatef(10, 4, -10);
    glutSolidCube(8);
  glPopMatrix();

  // Cube II
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[1]);
  glPushMatrix();
    glTranslatef(-10, 4, 10);
    glutSolidCube(4);
  glPopMatrix();

  // Cone I
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[0]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[0]);
  glPushMatrix();
    glTranslatef(-10, 0, -10);
    glRotatef(90, -1, 0, 0);
    glutSolidCone(4, 8, 50 ,50);
  glPopMatrix();

  // Cone II
  glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, colors[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular[1]);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess[1]);
  glPushMatrix();
    glTranslatef(10, 2, 10);
    glRotatef(90, -1, 0, 0);
    glutSolidCone(2, 4, 50 ,50);
  glPopMatrix();


  // Lights
  GLfloat lightpos[3][4] = {
      {50.0, 0.0, 0.0, 1},
      {0.0, 30.0, 0.0, 1},
      {-50.0, 0.0, 0.0, 1},
  };

  GLfloat lightcol[3][3] = {
      {0.3, 0.1, 0.1},
      {0.3, 0.3, 0.3},
      {0.1, 0.1, 0.3},
  };

  GLint direction[3][3] = {
      {0,0,1},
      {0,0,1},
      {0,0,1}
  };

  // Light I
  glLightfv(GL_LIGHT0, GL_POSITION, lightpos[0]);
  glLightfv(GL_LIGHT0, GL_AMBIENT, lightcol[0]);
  glLightfv(GL_LIGHT0, GL_DIFFUSE, lightcol[0]);
  glLightfv(GL_LIGHT0, GL_SPECULAR, lightcol[0]);
  glLightiv(GL_LIGHT0, GL_SPOT_DIRECTION, direction[0]);

  // Light II
  glLightfv(GL_LIGHT1, GL_POSITION, lightpos[1]);
  glLightfv(GL_LIGHT1, GL_AMBIENT, lightcol[1]);
  glLightfv(GL_LIGHT1, GL_DIFFUSE, lightcol[1]);
  glLightfv(GL_LIGHT1, GL_SPECULAR, lightcol[1]);
  glLightiv(GL_LIGHT1, GL_SPOT_DIRECTION, direction[1]);

  // Light III
  glLightfv(GL_LIGHT2, GL_POSITION, lightpos[2]);
  glLightfv(GL_LIGHT2, GL_AMBIENT, lightcol[2]);
  glLightfv(GL_LIGHT2, GL_DIFFUSE, lightcol[2]);
  glLightfv(GL_LIGHT2, GL_SPECULAR, lightcol[2]);
  glLightiv(GL_LIGHT2, GL_SPOT_DIRECTION, direction[2]);

  // Set the camera
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  float aspect = (float)glutGet(GLUT_WINDOW_WIDTH)/(float)glutGet(GLUT_WINDOW_HEIGHT);
  gluPerspective(60.0, aspect, 1.0, 100.0); 

  	// Calculate position 
  	calculateCameraPosition();

	gluLookAt(	camera_x, camera_y, camera_z,
              0.0, 0.0, 0.0,
              0.0, camera_orientation, 0.0);

  	glFlush();

  // Use a buffer
  glutSwapBuffers();
}

void reshape(int width, int height)
{
  glViewport(0, 0, width, height);
}

void prepareScene()
{
  glClearColor(0.0 , 0.0, 0.0, 1.0);

  // Enable lighting
  glEnable(GL_LIGHTING);
  glEnable(GL_LIGHT0);
  glEnable(GL_LIGHT1);
  glEnable(GL_LIGHT2);


  // Enable materials
  glEnable(GL_NORMALIZE);

  // Enable z-buffer
  glEnable( GL_DEPTH_TEST );
  glDepthFunc( GL_LESS );
  glDepthRange(0, 150);

}

int main(int argc, char **argv)
{
  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH);

  glutInitWindowSize(1280, 720);
  glutInitWindowPosition(100, 100);
  glutCreateWindow("Projekt 2");

  prepareScene();

  //glutFullScreen();

  glutDisplayFunc(display);
  glutIdleFunc(display);

  glutKeyboardFunc(keyboardFunc);
  glutSpecialFunc(specialFunc);

  glutReshapeFunc(reshape);

  glutMainLoop();
  
  return 0;             
}
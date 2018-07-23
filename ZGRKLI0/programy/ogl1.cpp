#include <windows.h> // nie w ka¿dym kompilatorze potrzebne, 
                     //wymagane np. w DevC++
										 
#include <GL/glut.h> // do³¹czenie nag³ówka biblioteki glut; 
                     //nie ma potrzeby do³¹cznia nag³ówków gl.h i glu.h, 
                     //gdy¿ s¹ one do³¹czane w kodzie glut.h
                     
void display() //nazwa tej funkcji mo¿e byæ dowolona
{
glClearColor(1.0,1.0,1.0,1.0); 
glClear(GL_COLOR_BUFFER_BIT);
gluPerspective(45.0, 1.0, 0.1, 10.0);
gluLookAt(0.0, 0.0, 3.0,  0.0, 0.0, 0.0,  0.0, 1.0, 0.0);
glBegin(GL_POLYGON);
  glColor3f(1.0, 0.0, 0.0); 
  glVertex3f(0.0, 0.0, 0.0);
  glColor3f(0.0, 1.0, 0.0); 
  glVertex3f(1.0, 0.0, 0.0);
  glColor3f(0.0, 0.0, 1.0); 
  glVertex3f(0.0, 1.0, 0.0);
glEnd();  
glFlush();
} 

void main(int argc, char** argv)
{
  glutInit(&argc, argv);  

  //inicjacja wszystkich "stanów" bie¿¹cych biblioteki GLUT (tzn. wartoœci 
  //pocz¹tkowych zmiennych, którymi siê pos³uguje). Dopóki nie zmieni siê 
  //któregoœ stanu, jawnie wywo³uj¹c dan¹ funkcjê, obowi¹zuje jego wartoœæ
  //bie¿¹ca; stanami s¹ np. iloœæ bajtów opisuj¹ca kolor piksela, rozdzielczoœæ
  //okna ekranowego, po³o¿enie okna na ekranie
  //(wszyskie funkcje biblioteki GLUT maj¹ prefix glut)
                          
  glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
  
  //Wszystkie sta³e  biblioteki GLUT maj¹ prefix GLUT_. W funkcjach które
  //ich u¿ywaj¹ s¹ one ³¹czone przez operacjê sumy bitowej | w jedn¹ wspóln¹
  //sta³¹. Wartoœci sta³ych podstawowych s¹ na tyle unikalne, ¿e suma 
  //bitowa dowolnej ich iloœci daje now¹, równie¿ unikaln¹ wartoœæ. 
  //Zapewnia to jednoznacznoœæ opisu. 
  //GLUT_RGB - okno bêdzie u¿ywa³o trójskladnikowego opisu koloru we 
  //wspólrzêdnych r,g,b (zak³adam, ¿e zasada tego opisu jest znana)
  //GLUT_SINGLE - okno bêdzie mia³o przydzielon¹ pamiêæ na pojedynczy
  //obraz (wielkoœc pamiêci to iloœæ pikseli okna razy pamiêæ na jeden 
  //piksel - zob. te¿ wywo³ania ni¿ej). W przypadku animacji, dla 
  //unikniêcia "migotania" potrzebujemy dwóch p³aszczyzn obrazu - 
  //przydzielamy wówczas podwójn¹ pamiêæ - GLUT_DOUBLE
  
  glutInitWindowSize(400,300);
  
  //okreœlnie rozmiaru okna w pikselach (szerokoœæ, wysokoœæ)
  
  glutInitWindowPosition(100,100);
  
  //okreœlnie po³o¿enia lewego, górnego naro¿nika okna na ekranie   
  //obie powy¿sze wielkoœci maj¹ (jak wszystko w OpenGL) wartoœci
  //domyœlne ustawione na starcie, ale kilka z nich warto ustawiæ
  //jawnie, np. ¿eby nie potrzeba pamiêtaæ ustawieñ domyœlnych
  
  glutCreateWindow("Scena testowa");
  
  //przygotowanie struktury okna w pamiêci RAM - okno nie jest jeszcze
  //wyœwietlone na ekranie ("scena testowa" to przyklad nazwy 
  //pokazuj¹cej siê na górnej belce okna)
  //ponadto nastêpuje inicjacja wszystkich "`stanów" bie¿¹cych biblioteki OpenGl (tzn. wartoœci 
  //pocz¹tkowych zmiennych, którymi siê pos³uguje). Dopóki nie zmieni siê 
  //któregoœ stanu, jawnie wywo³uj¹c dan¹ funkcjê, obowi¹zuje jego wartoœæ
  //bie¿¹ca; stanami s¹ np. kolor rysowania bie¿¹cego obiektu, jego materia³,
  //po³o¿enie obserwatora itp.
  
  glutDisplayFunc(display);
  
  //funkcja ta pobiera nazwê funkcji opisuj¹cej scenê ,która ma
  //byæ wyœwietlona w zdefiniowanym oknie - w tym przypadku
  //funkcja nazywa siê: display
 
  glutMainLoop();
  
  //uruchomienie pêtli obs³ugi zdarzeñ. tzn. w szczególnoœci
  // - wyœwietlenie zdefinowangeo wczeœniej okna na ekranie
  // - za³adowanie do okna obrazu sceny, przez wywolanie 
  //   funkcji display
  // - oczekiwanie na kolejne zdarzenia (np. exit)
}
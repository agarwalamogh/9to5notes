import java.util.ArrayList;
class Box {
	private double width;
	private double height;
	private double depth;
	Box(Box ob) { 	// pass object to constructor
		width = ob.width;
		height = ob.height;
		depth = ob.depth;
		}
	Box(double w, double h, double d) {
		width = w;
		height = h;
		depth = d;
		}
	Box() {
		width = -1; // use -1 to indicate
		height = -1; // an uninitialized
		depth = -1; // box
	           }
	Box(double len) {
		width = height = depth = len;
	           }
	double volume() {
		return width * height * depth;
	}               }

public class TestArrayList
         {
public static void main(String[] args) 
       {
 // Create a list to store cities
	java.util.ArrayList cityList = new java.util.ArrayList();

 // Add some cities in the list
 	cityList.add("London");
	// cityList now contains [London]
 	cityList.add("Denver");
 // cityList now contains [London, Denver]
 	cityList.add("Paris");
 // cityList now contains [London, Denver, Paris]
	cityList.add("Miami");
 // cityList now contains [London, Denver, Paris, Miami]
 	cityList.add("Seoul");
 // contains [London, Denver, Paris, Miami, Seoul]
 	cityList.add("Tokyo");
 // contains [London, Denver, Paris, Miami, Seoul, Tokyo]

 	System.out.println("List size? "+ cityList.size());
 	System.out.println("Is Miami in the list? " +cityList.contains("Miami") );
 	System.out.println("The location of Denver in the list?"  + cityList.indexOf("Denver"));
 	System.out.println("Is the list empty? " +cityList.isEmpty() ); // Print false

 // Insert a new city at index 2
 	cityList.add(2, "Xian");
 // contains [London, Denver, Xian, Paris, Miami, Seoul, Tokyo]

 // Remove a city from the list
	cityList.remove("Miami");
 // contains [London, Denver, Xian, Paris, Seoul, Tokyo]

 // Remove a city at index 1
 	cityList.remove(1);
 // contains [London, Xian, Paris, Seoul, Tokyo]

 // Display the contents in the list
 	System.out.println(cityList.toString());

 // Display the contents in the list in reverse order
 	for (int i = cityList.size() - 1; i >= 0; i--)
 	System.out.print(cityList.get(i) + " ");
 	System.out.println();

 // Create a list to store two circles
	java.util.ArrayList list = new java.util.ArrayList();

 // Add two circles
 	list.add(new Box(2));
 	list.add(new Box(3));

 // Display the area of the first circle in the list
 	System.out.println("The Volume of the Box? " + ((Box)list.get(0)).volume());
 }
}
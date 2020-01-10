class Box 
   {
	double width;
	double height;
	double depth;
	void volume() 
	     {
	            System.out.print("Volume is ");
	            System.out.println(width * height * depth);
             }
   }
    
class BoxDemo2 
  {
	public static void main(String args[]) 
	    {
		Box mybox1 = new Box();
		mybox1.width = 10;
		mybox1.height = 20;
		mybox1.depth = 15;
		mybox1.volume();
	    }
   }

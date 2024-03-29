const restaurants = [
  {
    id: 1,
    name: "Flavor Fusion",
    address: "123 Main Street, New York, NY 10001",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    name: "Tasty Haven",
    address: "456 Elm Avenue, Los Angeles, CA 90001",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    name: "Gourmet Junction",
    address: "789 Oak Street, Chicago, IL 60601",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    name: "Savory Delights",
    address: "321 Maple Drive, Houston, TX 77001",
    image: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "The Hungry Palette",
    address: "987 Pine Street, Miami, FL 33101",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    name: "Culinary Oasis",
    address: "654 Cedar Lane, San Francisco, CA 94101",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    name: "Flavor Symphony",
    address: "321 Walnut Avenue, Boston, MA 02101",
    image: "https://images.pexels.com/photos/2956952/pexels-photo-2956952.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Greenleaf Restaurant",
    address: "789 Broadway, Seattle, WA 98101",
    image: "https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Spice Junction",
    address: "234 Cherry Street, Atlanta, GA 30301",
    image: "https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg",
  },
  {
    id: 10,
    name: "The Food Town",
    address: "567 Elmwood Road, Denver, CO 80201",
    image: "https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_1280.jpg",
  },
];

localStorage.setItem("restaurants", JSON.stringify(restaurants));

export default restaurants;

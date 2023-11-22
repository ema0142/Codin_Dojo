class Animal:
    def __init__(self, name, age, health=50, happiness=50):
        self.name = name
        self.age = age
        self.health = health
        self.happiness = happiness

    def display_info(self):
        print(f"Name: {self.name}, Health: {self.health}, Happiness: {self.happiness}")

    def feed(self):
        self.health += 10
        self.happiness += 10
        return self 


class Lion(Animal):
    def __init__(self, name, age):
        super().__init__(name, age, health=60, happiness=40)
        self.roar_power = 8  

    def roar(self):
        print(f"{self.name} the Lion roars with a power of {self.roar_power}!")


class Tiger(Animal):
    def __init__(self, name, age):
        super().__init__(name, age, health=55, happiness=45)
        self.stripe_color = "Orange and Black" 

    def purr(self):
        print(f"{self.name} the Tiger purrs softly.")


class Bear(Animal):
    def __init__(self, name, age):
        super().__init__(name, age, health=65, happiness=35)
        self.fat = True  

    def hibernate(self):
        self.fat = False
        print(f"{self.name} bear not fat")


class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, animal):
        self.animals.append(animal)

    def print_all_info(self):
        print( self.name)
        for animal in self.animals:
            animal.display_info()

zoo1 = Zoo("John's Zoo")

zoo1.add_animal(Lion("Nala", 5).feed())
zoo1.add_animal(Lion("Simba", 4))
zoo1.add_animal(Tiger("Rajah", 6))
zoo1.add_animal(Tiger("Shere Khan", 7))
zoo1.add_animal(Bear("Baloo", 8))
zoo1.print_all_info()

for animal in zoo1.animals:
    animal.feed()
    animal.display_info()

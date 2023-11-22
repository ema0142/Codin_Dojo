class Ninja:
    def __init__(self,first_name,last_name,treats,past_food,pet):
        self.first_name=first_name
        self.last_name=last_name
        self.trats=treats
        self.past_food=past_food
        self.pet=pet
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat
        return self
    def bathe(self):
        self.pet.noise()
        return self
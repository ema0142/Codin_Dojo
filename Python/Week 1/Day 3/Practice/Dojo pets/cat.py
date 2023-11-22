from pet import Pet

class cat(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "cat", tricks)


gatitos=cat  ("gatous","sleep")
gatitos.noise()

from typing import Generic, TypeVar

T = TypeVar("T")


class Box(Generic[T]):
    def __init__(self, content: T):
        self._content = content

    def get(self) -> T:
        return self._content

    def set(self, content: T) -> None:
        self._content = content


text_box: Box[str] = Box("Hej")
number_box: Box[int] = Box(42)

text_box.set("Välkommen")
number_box.set(100)

print(text_box.get())
print(number_box.get())

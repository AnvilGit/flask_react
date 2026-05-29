from dataclasses import dataclass, asdict

@dataclass
class User:
    id: int
    name: str
    email: str
    role: str
    department: str
    status: str

    def to_dict(self):
        return asdict(self)

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PaymentRequest(BaseModel):
    method: str
    amount: float
    phone: str | None = None

@app.get("/")
def home():
    return {"message": "Backend server is running!"}

@app.post("/pay")
def pay(data: PaymentRequest):
    if data.method == "mpesa":
        return {
            "status": "pending",
            "message": "M-Pesa prompt sent to phone",
            "amount": data.amount,
            "phone": data.phone
        }

    if data.method == "paypal":
        return {
            "status": "redirect",
            "message": "Redirecting to PayPal..."
        }

    if data.method == "card":
        return {
            "status": "success",
            "message": "Card payment successful!"
        }

    return {"status": "error", "message": "Invalid payment method"}

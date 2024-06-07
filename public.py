from flask import*
from database import*

public=Blueprint('public',__name__)

@public.route('/')
def home():
	return render_template("loginn.html")

@public.route('/login',methods=['post','get'])
def login():
	
	return render_template("loginn.html") 
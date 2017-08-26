yarn build

copy build D:\git\serene-retreat-50059 /s /e 
rmdir /s build

cd D:\git\serene-retreat-50059

git add .
git commit -am "Deploy to Production"
git push heroku master
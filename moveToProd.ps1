yarn build

xcopy build D:\git\serene-retreat-50059 /s /e /Y
rd -r build

cd D:\git\serene-retreat-50059

git add .
git commit -am "Deploy to Production"
git push heroku master

Read-Host -Prompt "Press Enter to exit"
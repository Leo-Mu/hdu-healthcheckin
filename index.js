auto.waitFor();
launch("com.tencent.mm");
sleep(1500);
scrollDown(1);
while(!click("杭电助手")){
  scrollDown(0);
}

while(!click("健康打卡"));
sleep(3000);

while(text("定位中").findOnce());
//className("android.webkit.WebView").findOne().scrollForward();
for(var i = 0; i < 20; i++)
  scrollDown();

click("立即打卡");
sleep(100);
click("确认");

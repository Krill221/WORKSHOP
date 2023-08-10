
if [ "$1" = "app" ]
then
  mkdir pages/1_app
  touch pages/1_app/$2.ts
  exit 1
fi

if [ "$1" = "page" ]
then
  mkdir pages/2_pages
  mkdir pages/2_pages/$2
  touch pages/2_pages/$2/$2.tsx
  touch pages/2_pages/$2/index.ts
  touch pages/2_pages/$2/model.ts
  exit 1
fi

if [ "$1" = "widget" ]
then
  mkdir pages/3_widgets
  mkdir pages/3_widgets/$2
  touch pages/3_widgets/$2/$2.tsx
  touch pages/3_widgets/$2/index.ts
  touch pages/3_widgets/$2/model.ts
  exit 1
fi

if [ "$1" = "f" ]
then
  mkdir pages/4_feature
  mkdir pages/4_feature/$2
  touch pages/4_feature/$2/$2.tsx
  touch pages/4_feature/$2/index.ts
  touch pages/4_feature/$2/model.ts
  exit 1
fi



if [ "$1" = "shared" ]
then
  mkdir pages/6_shared
  touch pages/6_shared/$2.ts
  exit 1
fi
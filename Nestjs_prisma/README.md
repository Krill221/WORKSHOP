# install
pnpm i -g @nestjs/cli
pnpm i --save @nestjs/config
pnpm i --save class-validator class-transformer

pnpm install --save @nestjs/jwt @nestjs/passport
pnpm install --save passport passport-jwt
pnpm install --save-dev @types/passport-jwt

# create project
nest new project-name

# start
pnpm run start:dev

# create module
nest g module module-name

# prisma ORM
pnpm i -D prisma
pnpm i @prisma/client
prisma init
# dont forget to create service prisma
# migrate
npx prisma migrate dev
# prisma web ui
prisma studio

# validation





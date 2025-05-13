<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh 
    @vite(["resources/ts/app.tsx", "resources/css/app.css","resources/ts/bootstrap.js"])
    @inertiaHead
  </head>
  <body>
    @inertia
  
    {{-- <script src="{{ asset('/resources/ts/bootstrap.js') }}"></script> --}}
    {{-- @vite('resources/ts/bootstrap.js') --}}
  </body>
</html>

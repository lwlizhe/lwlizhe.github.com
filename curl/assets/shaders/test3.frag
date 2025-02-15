{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 iResolution;\nuniform float yaw;\nuniform shader iChannel0;\nuniform half2 iChannel0_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvoid FLT_main()\n{\n    vec2 fragCoord = FLT_flutter_local_FlutterFragCoord();\n    vec2 xy = ((fragCoord / iResolution) * 2.0) - vec2(1.0);\n    xy.x *= (iResolution.x / iResolution.y);\n    float z = -1.0;\n    vec3 rayDir = normalize(vec3(xy, z));\n    float cosYaw = cos(radians(yaw));\n    float sinYaw = sin(radians(yaw));\n    vec3 yawRotatedRayDir = vec3((cosYaw * rayDir.x) - (sinYaw * rayDir.z), rayDir.y, (sinYaw * rayDir.x) + (cosYaw * rayDir.z));\n    float cosPitch = 1.0;\n    float sinPitch = 0.0;\n    vec3 rotatedRayDir = vec3(yawRotatedRayDir.x, (cosPitch * yawRotatedRayDir.y) + (sinPitch * yawRotatedRayDir.z), ((-sinPitch) * yawRotatedRayDir.y) + (cosPitch * yawRotatedRayDir.z));\n    float u = 0.5 + (atan(rayDir.z, rayDir.x) / 6.283185482025146484375);\n    float v = 0.5 + (asin(clamp(rayDir.y, -1.0, 1.0)) / 3.1415927410125732421875);\n    fragColor = iChannel0.eval(iChannel0_size *  vec2(u, v));\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "iResolution",
      "rows": 2,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 1,
      "name": "yaw",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 0,
      "columns": 1,
      "location": 2,
      "name": "iChannel0",
      "rows": 1,
      "type": 12
    }
  ]
}
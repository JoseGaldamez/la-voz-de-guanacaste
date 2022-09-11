import 'dart:convert';

class BannerModel {
  BannerModel({
    required this.image,
    required this.url,
  });

  final String image;
  final String url;

  factory BannerModel.fromJson(String str) =>
      BannerModel.fromMap(json.decode(str));

  String toJson() => json.encode(toMap());

  factory BannerModel.fromMap(Map<String, dynamic> json) => BannerModel(
        image: json["image"],
        url: json["url"],
      );

  Map<String, dynamic> toMap() => {
        "img": image,
        "url": url,
      };
}

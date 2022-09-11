import 'dart:convert';

class Posts {
  Posts({
    required this.id,
    required this.title,
    required this.date,
    required this.content,
    required this.excerpt,
    required this.image,
    required this.url,
    required this.author,
    required this.readtime,
  });

  final int id;
  final String title;
  final String content;
  final String date;
  final String excerpt;
  final String image;
  final String url;
  final String author;
  final String readtime;

  factory Posts.fromJson(String str) => Posts.fromMap(json.decode(str));

  String toJson() => json.encode(toMap());

  factory Posts.fromMap(Map<String, dynamic> json) => Posts(
        id: json["id"],
        title: json["title"],
        content: json["content"],
        date: json["date"],
        excerpt: json["excerpt"],
        image: json["image"],
        url: json["url"],
        author: json["author"],
        readtime: json["readtime"],
      );

  Map<String, dynamic> toMap() => {
        "id": id,
        "title": title,
        "content": content,
        "excerpt": excerpt,
        "image": image,
        "url": url,
        "author": author,
        "readtime": readtime,
      };
}

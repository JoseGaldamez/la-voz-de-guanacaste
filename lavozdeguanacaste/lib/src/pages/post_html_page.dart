import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_share/flutter_share.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:lavozdeguanacaste/src/models/post_model.dart';
import 'package:url_launcher/url_launcher.dart';

class PostHtmlPage extends StatelessWidget {
  final Posts post;
  const PostHtmlPage({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String styleforHtml = '''
    <style>
    * {
      font-family: 'Roboto';
    }
    .article-wrapper{
      background-color: #f1f1f1;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 25px;
    }
    .article-wrapper div h3 a{
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      color: #000;
      margin-bottom: 10px;
    }
    p{
      font-size: 1.2rem;
      line-height: 1.5;
      color: #000;
    }
    h3{
      font-size: 1.5rem;
      line-height: 1.5;
      color: #000;
    }
    </style>
''';

    Future<void> share() async {
      await FlutterShare.share(
          title: 'Me gustó este artículo y te lo comparto',
          text: post.title + '\n' + removeHtmlTags(post.excerpt) + '\n',
          linkUrl: post.url,
          chooserTitle: 'La Voz de Guanacaste');
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(post.title),
        actions: [
          IconButton(
              onPressed: () {
                //Share the post
                share();
              },
              icon: const Icon(Icons.share))
        ],
      ),
      body: SingleChildScrollView(
          child: Column(
        children: [
          ImagePost(post: post),
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Text(
              post.title,
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 10.0),
            child: Row(
              children: [
                Text(
                  formateDate(post.date),
                  style: const TextStyle(
                      color: Colors.black54,
                      fontSize: 12,
                      fontWeight: FontWeight.w300),
                ),
                const SizedBox(
                  width: 5,
                ),
                const Text(
                  " | ",
                  style: TextStyle(
                      color: Colors.black54,
                      fontSize: 12,
                      fontWeight: FontWeight.w300),
                ),
                const SizedBox(
                  width: 5,
                ),
                Text(
                  post.author,
                  style: const TextStyle(
                      color: Colors.black54,
                      fontSize: 12,
                      fontWeight: FontWeight.w300),
                ),
                const SizedBox(
                  width: 5,
                ),
                const Text(
                  " | ",
                  style: TextStyle(
                      color: Colors.black54,
                      fontSize: 12,
                      fontWeight: FontWeight.w300),
                ),
                const SizedBox(
                  width: 5,
                ),
                Text(
                  post.readtime,
                  style: const TextStyle(
                      color: Colors.black54,
                      fontSize: 12,
                      fontWeight: FontWeight.w300),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Html(
                data: post.content + styleforHtml,
                onLinkTap: (String? url, RenderContext context,
                    Map<String, String> attributes, element) {
                  tryLaunchUrl(url);
                }),
          ),
          Container(
            width: double.infinity,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                TextButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(
                        Icons.arrow_back_ios,
                        color: Colors.black54,
                      ),
                      const Text(
                        "Regresar",
                        style: TextStyle(color: Colors.black54),
                      ),
                    ],
                  ),
                ),
                TextButton(
                  onPressed: () {
                    tryLaunchUrl(post.url);
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        "Ver en web",
                        style: TextStyle(color: Colors.black54),
                      ),
                      const Icon(
                        Icons.arrow_forward_ios,
                        color: Colors.black54,
                      ),
                    ],
                  ),
                ),
              ],
            ),
            height: 150,
            color: Color(0xffF1F1F1),
          )
        ],
      )),
    );
  }
}

String formateDate(String date) {
  var dateParse = DateTime.parse(date);
  var formatedDate = "${dateParse.day}/${dateParse.month}/${dateParse.year}";
  return formatedDate;
}

Future<void> tryLaunchUrl(url) async {
  final Uri _url = Uri.parse(url);
  if (!await launchUrl(_url)) {
    throw 'Could not launch $_url';
  }
}

class ImagePost extends StatelessWidget {
  const ImagePost({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Posts post;

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: post.image,
      placeholder: (context, url) => Center(
          child: Container(
              height: 150,
              width: 150,
              padding: const EdgeInsets.all(40.0),
              child: const CircularProgressIndicator())),
      errorWidget: (context, url, error) => const Icon(Icons.error),
    );
  }
}

String removeHtmlTags(String htmlText) {
  RegExp exp = RegExp(r"<[^>]*>", multiLine: true, caseSensitive: true);
  return htmlText.replaceAll(exp, '');
}

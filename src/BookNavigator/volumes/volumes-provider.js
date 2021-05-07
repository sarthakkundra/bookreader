import { html } from 'lit-element';
import './volumes.js';

const stub = {
  "success": true,
  "value": {
    "identifier": "SubBookTest",
    "mediatype": "texts",
    "files": {
      "by_url": {
        "/details/SubBookTest": {
          "url_path": "/details/SubBookTest",
          "file_prefix": "book1/GPORFP",
          "title": "book1/GPORFP.pdf",
          "file_source": "/book1/GPORFP_jp2.zip"
        },
        "/details/SubBookTest/subdir/book2/brewster_kahle_internet_archive": {
          "url_path": "/details/SubBookTest/subdir/book2/brewster_kahle_internet_archive",
          "file_prefix": "subdir/book2/brewster_kahle_internet_archive",
          "title": "subdir/book2/brewster_kahle_internet_archive.pdf",
          "file_source": "/subdir/book2/brewster_kahle_internet_archive_jp2.zip"
        },
        "/details/SubBookTest/subdir/subsubdir/book3/Rfp008011ResponseInternetArchive-without-resume": {
          "url_path": "/details/SubBookTest/subdir/subsubdir/book3/Rfp008011ResponseInternetArchive-without-resume",
          "file_prefix": "subdir/subsubdir/book3/Rfp008011ResponseInternetArchive-without-resume",
          "title": "subdir/subsubdir/book3/Rfp008011ResponseInternetArchive-without-resume.pdf",
          "file_source": "/subdir/subsubdir/book3/Rfp008011ResponseInternetArchive-without-resume_jp2.zip"
        }
      },
      "main_dir": "/2/items/SubBookTest"
    }
  }
};


export default class VolumesProvider {
  constructor(volumes, bookreader) {
    // const boundOptions = Object.assign(this, options, {loginClicked: this.bookmarksLoginClicked});
    this.component = document.createElement('viewable-files');
    this.component.volumes = stub;

    this.icon = '';
    this.label = 'Viewable files';
    this.id = 'multiple-books';
    this.updateMenu(Object.keys(this.component.volumes).length);
  }

  updateMenu(count) {
    this.menuDetails = `(${count})`;
    this.actionButton = html`<button @click={this.sort}>$$</button>`;
  }

  sortVolumes() {
    alert('hello moto');
    // need: asc/desc state?
  }

  bindEvents() {
    this.component.addEventListener('click', this.multiplefilesClicked.bind(this));
  }

  multiplefilesClicked({ detail }) {
    // maybe some analytics?
    if (window.archive_analytics) {
      window.archive_analytics?.send_event_no_sampling(
        'BookReader',
        `VolumesSort`,
        window.location.path,
      );
    }
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxImageCompressService} from 'ngx-image-compress';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-generic-image-uploader',
    templateUrl: './generic-image-uploader.component.html',
    styleUrls: ['./generic-image-uploader.component.sass']
})
export class GenericImageUploaderComponent implements OnInit {

    @Input() imageFile;
    @Output() imageEmit = new EventEmitter<string>();

    trashIcon = faTrashAlt;
    editIcon = faEdit;

    constructor(private notify: ToastrService, private imageCompress: NgxImageCompressService) {
    }

    ngOnInit(): void {
    }

    fileLoad(event) {
        const file = event.target.files[0];


        if (file.type === 'image/jpeg' || file.type === 'image/png') {

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let base64 = reader.result;
                console.log(this.imageCompress.byteCount(base64));
                const clearLoop = setInterval(() => {
                    if (this.imageCompress.byteCount(base64) > 100000) {

                        this.imageCompress.compressFile(base64.toString(), 1, 50, 50).then((result) => {
                            base64 = result;
                            console.log(this.imageCompress.byteCount(base64));
                        });
                    } else {
                        this.imageFile = base64.toString();
                        this.imageOutput();
                        clearInterval(clearLoop);
                    }
                }, 100);
            };
        } else {
            this.notify.error('Only accepts image');
        }
    }

    removeImage() {
        this.imageFile = null;
        this.imageOutput();
    }


    imageOutput() {
        this.imageEmit.emit(this.imageFile);
    }

}
